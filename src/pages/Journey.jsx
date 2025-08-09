import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Experience from "./Experience";
import Education from "./Education";

export default function Journey() {
  return (
    <div className="p-6">
      <Tabs defaultValue="experience" className="mx-auto w-full max-w-3xl">
        <TabsList className="mb-6 flex w-full justify-start gap-8 border-b bg-transparent pb-0">
          <TabsTrigger
            value="experience"
            className="text-muted-foreground data-[state=active]:text-foreground data-[state=active]:border-b-primary rounded-none bg-transparent px-0 py-2 pb-3 data-[state=active]:border-b-2 data-[state=active]:bg-transparent text-base"
          >
            Experience
          </TabsTrigger>
          <TabsTrigger
            value="education"
            className="text-muted-foreground data-[state=active]:text-foreground data-[state=active]:border-b-primary rounded-none bg-transparent px-0 py-2 pb-3 data-[state=active]:border-b-2 data-[state=active]:bg-transparent text-base"
          >
            Education
          </TabsTrigger>
        </TabsList>
        <TabsContent value="experience" className="p-0">
          <Experience />
        </TabsContent>
        <TabsContent value="education" className="p-0">
          <Education />
        </TabsContent>
      </Tabs>
    </div>
  );
}
