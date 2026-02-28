// import Preloader from '@/components/preloader/preloader'
import Header from '@/components/layout/header'
import Projects from '@/components/section/projects'
import Faq from '@/components/section/faq'
import Services from '@/components/section/services'
import Process from '@/components/section/process'
import Cta from '@/components/ui/cta'

export default function Home() {
  return (
    <div>
      {/* <Preloader /> */}
        <Header />
        <Projects />
        <Services />
        <Faq />
        <Process />
        <Cta />
    </div>
  );
}
