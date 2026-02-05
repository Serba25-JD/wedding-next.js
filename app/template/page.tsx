'use client';
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Users } from "@/public/js/Users";
import Template1 from "@/components/templates/template-1";
import Home from "@/app/page";

export default function TemplatePage() {
  const searchParams = useSearchParams();
  const templates = Number(searchParams.get('t'));
  const user = searchParams.get('u');
  const [ selectdUsers, setSelectedUsers] = useState<string[]>([]);
  const [ templateUsers, setTemplateUsers] = useState<React.ReactNode>(null);
  useEffect(() => {
    if (!templates || !user) {
      setTemplateUsers(null);
      return;
    }
    const usersTemplate = Users[templates as keyof typeof Users];
    if (usersTemplate && usersTemplate.includes(user)) {
      setSelectedUsers(usersTemplate);
      switch(templates) {
        case 1:
          setTemplateUsers(<Template1 />)
        default:
            setTemplateUsers(null);
      }
    } else {
        setTemplateUsers(null);
    };
  }, [templates, user]);
  return templates ? templates : (
    <Home />
  )
}