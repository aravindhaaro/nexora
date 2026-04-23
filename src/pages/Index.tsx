import { Layout } from "@/components/layout/Layout";
import { CinematicShowcase } from "@/components/CinematicShowcase";

const Index = () => {
  return (
    <Layout variant="dark" hideFooter>
      {/* To swap the top-center logo later, pass logoSrc={yourImport} */}
      <CinematicShowcase />
    </Layout>
  );
};

export default Index;
