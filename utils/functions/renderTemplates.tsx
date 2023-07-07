import { Repository, Stars, GithubSkeleton } from "@/components";

export const renderTemplates = (mediaTemplates: string) => {
  switch (mediaTemplates) {
    case "repository":
      return <Repository />;
    case "star":
      return <Stars />;

    default:
      return <GithubSkeleton />;
  }
};
