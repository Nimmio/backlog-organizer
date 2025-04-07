import { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { cn } from "@/lib/utils";

interface AppCardProps {
  title?: string;
  description?: string;
  content: ReactNode | string;
  footer?: ReactNode | string;
  className?: string
}

const AppCard = (props: AppCardProps) => {
  const { title, description, content, footer, className} = props;
  return (
    <Card className={cn(className)}>
      {(title || description) && (
        <CardHeader >
          {title && <CardTitle>{title}</CardTitle>}
          {description && <CardDescription>Card Description</CardDescription>}
        </CardHeader>
      )}
      <CardContent >{content}</CardContent>
      {footer && (
        <CardFooter>
          <p>{footer}</p>
        </CardFooter>
      )}
    </Card>
  );
};

export default AppCard;
