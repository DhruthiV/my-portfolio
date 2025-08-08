import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Experience from "./Experience";
import Education from "./Education";

export default function Journey() {
  return (
    <div className="p-6">
      <Tabs defaultValue="account" className="mx-auto w-full max-w-3xl">
        <TabsList className="mb-6 flex w-full justify-start gap-8 border-b bg-transparent pb-0">
          <TabsTrigger
            value="account"
            className="text-muted-foreground data-[state=active]:text-foreground data-[state=active]:border-b-primary rounded-none bg-transparent px-0 py-2 pb-3 data-[state=active]:border-b-2 data-[state=active]:bg-transparent text-base"
          >
            Experience
          </TabsTrigger>
          <TabsTrigger
            value="password"
            className="text-muted-foreground data-[state=active]:text-foreground data-[state=active]:border-b-primary rounded-none bg-transparent px-0 py-2 pb-3 data-[state=active]:border-b-2 data-[state=active]:bg-transparent text-base"
          >
            Education
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account" className="p-0">
          <Experience />
        </TabsContent>
        <TabsContent value="password" className="p-0">
          <Education />
        </TabsContent>
      </Tabs>
    </div>
  );
}
