import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface SkillSetCardProps {
    title: string;
    skills: string[];
}

export const SkillSetCard = ({title, skills} : SkillSetCardProps) => {
    return(
        <Card className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 md:p-6">
            <CardHeader className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-200">
                {title}    
            </CardHeader>    
            <CardContent className="text-gray-600 dark:text-gray-400">
                <ol className="space-y-2 md:space-y-3">
                    {skills.map((skill, index) => (
                        <li key={index} className="text-sm md:text-base">
                            {skill}
                        </li>
                    ))}
                </ol>
            </CardContent>
        </Card>
    )
}