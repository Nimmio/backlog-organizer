"use server";
import * as Minio from "minio";
import type internal from "stream";

// Create a new Minio client with the S3 endpoint, access key, and secret key
const s3Client = new Minio.Client({
  endPoint: process.env.S3_ENDPOINT as string,
  port: process.env.S3_PORT ? Number(process.env.S3_PORT) : undefined,
  accessKey: process.env.S3_ACCESS_KEY,
  secretKey: process.env.S3_SECRET_KEY,
  useSSL: process.env.S3_USE_SSL === "true",
});

async function createBucketIfNotExists(bucketName: string) {
  const bucketExists = await s3Client.bucketExists(bucketName);

  if (!bucketExists) {
    await s3Client.makeBucket(bucketName);
  }
}

/**
 * Save file in S3 bucket
 * @param bucketName name of the bucket
 * @param fileName name of the file
 * @param file file to save
 */
export async function saveFileInBucket({
  bucketName,
  fileName,
  file,
}: {
  bucketName: string;
  fileName: string;
  file: Buffer | internal.Readable;
}) {
  // Create bucket if it doesn't exist
  await createBucketIfNotExists(bucketName);

  // check if file exists - optional.
  // Without this check, the file will be overwritten if it exists
  // const fileExists = await checkFileExistsInBucket({
  //   bucketName,
  //   fileName,
  // });

  // if (fileExists) {
  //   throw new Error("File already exists");
  // }
  // Upload image to S3 bucket
  await s3Client.putObject(bucketName, fileName, file);
}

/**
 * Check if file exists in bucket
 * @param bucketName name of the bucket
 * @param fileName name of the file
 * @returns true if file exists, false if not
 */
export async function checkFileExistsInBucket({
  bucketName,
  fileName,
}: {
  bucketName: string;
  fileName: string;
}) {
  try {
    await s3Client.statObject(bucketName, fileName);
  } catch (error) {
    return error;
  }
  return true;
}

/**
 * Get file from S3 bucket
 * @param bucketName name of the bucket
 * @param fileName name of the file
 * @returns file from S3
 */
export async function getFileFromBucket({
  bucketName,
  fileName,
}: {
  bucketName: string;
  fileName: string;
}) {
  try {
    await s3Client.statObject(bucketName, fileName);
  } catch (error) {
    console.error(error);
    return null;
  }
  return await s3Client.getObject(bucketName, fileName);
}

export async function createPresignedUrlToDownload({
  bucketName,
  fileName,
  expiry = 60 * 60, // 1 hour
}: {
  bucketName: string;
  fileName: string;
  expiry?: number;
}) {
  return await s3Client.presignedGetObject(bucketName, fileName, expiry);
}

export const getBlobFromBucket = async ({
  bucketName,
  fileName,
}: {
  bucketName: string;
  fileName: string;
}) => {
  try {
    const test = await createPresignedUrlToDownload({
      bucketName,
      fileName,
    });
    return await fetch(test).then((response) => response.blob());
  } catch (error) {
    console.error(error);
    return null;
  }
};

/**
 * Delete file from S3 bucket
 * @param bucketName name of the bucket
 * @param fileName name of the file
 * @returns true if file was deleted, false if not
 */
export async function deleteFileFromBucket({
  bucketName,
  fileName,
}: {
  bucketName: string;
  fileName: string;
}) {
  try {
    await s3Client.removeObject(bucketName, fileName);
  } catch (error) {
    console.error(error);
    return false;
  }
  return true;
}
