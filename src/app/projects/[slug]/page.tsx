import ProjectAbout from "@/components/project-about";
import { notFound } from "next/navigation";
import { allProjects } from "contentlayer/generated";
import { Mdx } from "@/components/mdx";
import "../../../css/mdx.css"
import { Separator } from "@/components/ui/separator";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams(): Promise<Props["params"][]> {
  return allProjects
    .filter((p) => p.published)
    .map((p) => ({
      slug: p.slug,
    }));
}

export default async function PostPage({ params }: Props) {
  const slug = params?.slug;
  const project = allProjects.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="h-heightWithoutHeader min-h-full content-container flex flex-col bg-background py-10">
      <ProjectAbout project={project} />
      <Separator className="w-[80%] my-4 mx-auto bg-primary" />
      <article className="px-4 py-12 mx-auto content-container">
        <h2 className="text-xl text-primary font-semibold md:text-3xl text-center mb-5 underline">
          About the project
        </h2>
        <Mdx code={project.body.code} />
      </article>
    </div>
  );
}
