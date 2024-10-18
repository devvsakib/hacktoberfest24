import { useState } from 'react'
import Banner from './components/Banner'
import Header from './components/Header'
import Layout from './components/Layout'
import { images } from './config/images'
import "./index.css"
import { Link } from 'react-router-dom'

function App() {
  const [selectedBook, setSelectedBook] = useState("")

  const mustHaveBooks = [
    {
      name: "আল ফাতাওয়া আল হামা... আল কুবরা",
      src: images.alfatwaalhama
    },
    {
      name: "কিতাবুত তাওহীদ",
      src: images.kitabuttawhid
    },
    {
      name: "মানহাজুস সালাফ",
      src: images.manhajsalaf
    },
    {
      name: "ফিকহুস সালাফ",
      src: images.fiqhsalaf
    },
    {
      name: "ফিকহুস সালাফ",
      src: images.fiqhmuasser
    },
  ]
  return (
    <>
      <Header />
      <Banner />

      <section className=' relative'>

        <Layout>
          <div className='py-40 w-full z-40 grid gap-20 justify-center items-center mx-auto'>
            <div className='text-center mx-auto relative'>
              <p className='text-white absolute top-0 left-0 right-0 bottom-0'>যে বই অবশ্যই থাকতে হবে</p>
              <h4 className='text-7xl py-2 font-semibold w-fit gradText'>তালিবুল ইলম</h4>
            </div>
            <div className='grid md:grid-cols-3 gap-10 relative'>
              {/* <div className='grid -top-20 z-40 font-[chayanaFont] absolute w-full text-[7rem] md:grid-cols-3 gap-10'>
                <p className='gradTex text-white bg-gradient-to-tr from-orange-300 bg-clip-text !text-transparent to-white'>১</p>
                <p className='gradTex text-white bg-gradient-to-tr from-orange-300 bg-clip-text !text-transparent to-white'>২</p>
                <p className='gradTex text-white bg-gradient-to-tr from-orange-300 bg-clip-text !text-transparent to-white'>৩</p>
              </div> */}
              {
                mustHaveBooks.map(book =>
                  <div className='relative h-full p-1 group' key={book.name}>
                    <div className='gradientBorderBox h-full overflow-hidden'>
                      <img className='featureImg group-hover:bg-orange-200' src={book.src} />
                      <div className='z-40 absolute bg-gradient-to-t from-black text-white bottom-0 left-0 right-0 text-center py-10 opacity-0 h-0 group-hover:h-full group-hover:opacity-100 transition-all duration-300 grid place-content-center rounded-[10px]'>
                        <h2 className='text-2xl break-words'>{book.name}</h2>
                        <button
                          className='mt-1'
                          onClick={() => {
                            document.getElementById('my_modal_2').showModal()
                            setSelectedBook(book.name)
                          }}>কিনুন</button>
                      </div>
                    </div>
                  </div>
                )
              }

            </div>
          </div>
          <dialog id="my_modal_2" className="modal">
            <div className="modal-box p-5">
              <h3 className="font-bold text-lg text-white">{selectedBook}</h3>
              <p className="py-4">বইটি সংগ্রহ করতে আমাদের ফেসবুক অথবা WhatsApp এ যোগাযোগ করুন। বারাকাল্লাহু ফি ইলমিক</p>
              <div className='flex gap-2 items-center justify-center'>
                <Link to="https://www.facebook.com/Sunnahbookshop" target="_blank">
                  <img className='w-8' src={images.facebook} alt='Facebook' typeof='button' />
                </Link>
                <Link to="https://wa.me/8801641447822" target="_blank">
                  <img className='w-8' src={images.whatsapp} alt='WhatsApp' typeof='button' />
                </Link>
              </div>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
          <div className='grad absolute top-0 left-0 right-0 w-full h-full z-10'></div>
        </Layout >
      </section >

      <section className=''>
      </section>

      <footer className="footer bg-neutral text-neutral-content py-24">
        <div className='max-w-[1280px] mx-auto flex justify-between w-full'>
          <aside>
            <img src={images.logo} className='rounded-md w-14' />
            <p className='text-4xl font-semibold pt-2'>
              SunnahBookshop
            </p>
            <span>Providing authentic Islamic books.</span>
          </aside>
          <nav>
            <h6 className="footer-title text-3xl">Contact</h6>
            <div className="grid grid-flow-col gap-4">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current">
                  <path
                    d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current">
                  <path
                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </nav>
        </div>
      </footer>


    </>
  )
}

export default App
