import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface TestimonialCardProps {
  name: string;
  position: string;
  quote: string;
}

export const TestimonialCard = ({
  name,
  position,
  quote,
}: TestimonialCardProps) => {
  return (
    <Card className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 md:p-6 flex flex-col justify-between">
      <CardHeader className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-200">
        {name}
      </CardHeader>
      <CardContent className="text-gray-600 dark:text-gray-400 space-y-3 md:space-y-4">
        <p className="text-sm md:text-base">{position}</p>
        <p className="text-sm md:text-base">{quote}</p>
      </CardContent>
    </Card>
  );
};
