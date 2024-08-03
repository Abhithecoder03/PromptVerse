import '@styles/globals.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';
import Meteors from '@components/meteors';
export const metadata = {
    title:"PromtVerse"
}
import Spotlight from '@components/Spotlight';
const RootLayout = ({children}) => {
  return (
      <html lang='en'>
          <body className='h-screen w-screen rounded-md flex   bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-y-scroll overflow-x-hidden '>
          <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
              <Provider className="">
              
                  <main className='w-screen relative'>
                  
                      <Nav className="w-4/5 fixed" />
                      {children}
                  <Meteors number={40} />
                  
                  </main>
                  </Provider>
          </body>
          
   </html>
  )
}

export default RootLayout
