import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";

interface ProjectProps {
  title: string;
  description: string;
  github: string;
  stack: string[];
  documentation: string;
  preview?: string;
}

export const ProjectSection = ({
  title,
  description,
  github,
  stack,
  documentation,
  preview
}: ProjectProps) => {
  return (
    <Card className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 md:p-6 flex flex-col justify-between">
      <CardHeader className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-200">
        {title}
      </CardHeader>

      <CardContent className="text-gray-600 dark:text-gray-400 space-y-3 md:space-y-4">
        <p className="text-sm md:text-base">{description}</p>

        <div className="flex flex-wrap gap-2 mt-2 text-xs md:text-sm text-gray-600 dark:text-gray-300">
          {stack.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <Link
          href={github}
          rel="noopener noreferrer"
          className="block text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 mt-3 md:mt-4 text-sm md:text-base"
        >
          View on GitHub
        </Link>
        <Link
          href={documentation}
          rel="noopener noreferrer"
          className="block text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 mt-3 md:mt-4 text-sm md:text-base"
        >
          View Documentation
        </Link>
        {preview && (
          <Link
            href={preview}
            rel="noopener noreferrer"
            className="block text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 mt-3 md:mt-4 text-sm md:text-base"
          >
            Preview
          </Link>
        )}
      </CardContent>
    </Card>
  );
};