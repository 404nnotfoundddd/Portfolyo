import { HelloSection } from './_components/HelloSection'
import { AboutMeSection } from './_components/AboutMeSection'
import { ProjectsSection } from './_components/ProjectsSection'

const Home = () => {
  return (
    <div style={{
      scrollbarWidth: 'none',
    }} className='overflow-y-scroll w-full h-full'>
      <div
        style={{
          backgroundColor: 'hsla(201, 100%, 50%, 1)',
          backgroundImage:
            'radial-gradient(at 40% 20%, hsla(188,100%,74%,1) 0px, transparent 50%),radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0px, transparent 50%),radial-gradient(at 0% 100%, hsla(153, 100%, 75%, 1) 0px, transparent 50%),radial-gradient(at 64% 4%, hsla(150, 100%, 76%, 1) 0px, transparent 50%),radial-gradient(at 0% 100%, hsla(178,100%,50%,1) 0px, transparent 50%),radial-gradient(at 100% 95%, hsla(200,100%,70%,1) 0px, transparent 50%),radial-gradient(at 0% 0%, hsla(113,100%,79%,1) 0px, transparent 50%)',
          scrollbarWidth: 'none',
        }}
        className="flex w-full flex-col gap-7 justify-center "
      >

        <HelloSection />
        <div className='animate-fade-up'>
          <AboutMeSection />
          <ProjectsSection />
        </div>
      </div>
    </div>


  )
}

export default Home