import { cn } from "@/utils/cn";
import { useTheme } from "next-themes";

interface GoalProps {
  className?: string;
}

export const Goal = ({ className }: GoalProps) => {
  const { theme } = useTheme();
  const fillColor = theme === "dark" ? "#1E293B" : "black";

  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <rect width="40" height="40" rx="15" fill={fillColor} />
      <path
        d="M24.5308 16.3311H23.8176C23.1058 16.3712 22.4959 15.8278 22.4538 15.1162V15.0535C22.4336 14.7103 22.2776 14.3892 22.0202 14.1613C21.7629 13.9333 21.4253 13.8172 21.0822 13.8386H16.1757V13.5878C16.1757 13.2632 15.9125 13 15.5878 13C15.2632 13 15 13.2632 15 13.5878V26.9122C15 27.2368 15.2632 27.5 15.5878 27.5C15.9125 27.5 16.1757 27.2368 16.1757 26.9122V20.4224H17.0927C17.8044 20.3823 18.4144 20.9257 18.4565 21.6373V21.6843C18.4986 22.3959 19.1085 22.9393 19.8203 22.8992H24.523C25.2347 22.9393 25.8447 22.3959 25.8868 21.6843V17.5303C25.8325 16.8301 25.2324 16.2994 24.5308 16.3311Z"
        fill={theme === "dark" ? "white" : "white"}
      />
    </svg>
  );
};

export default Goal;
