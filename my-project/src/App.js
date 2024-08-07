import logo from './logo.svg';
import './App.css';
import Header from './header';
import Footer from './footer';
import young from './young.png'


function App() {
  return (
    <>
    <Header />
    <div className='w-[124rem] h-[30rem]  p-[3rem]  flex my-[-2rem] mx-[3rem]'>
      <div className='w-[40rem] '>
        <h1 className='text-[4rem] font-bold'>Help build a  <span className='text-[#952A2A]'>Better Society</span>  for <span className='text-[#952A2A]'> All</span> </h1>
        <p className='text-[#202020]  text-[1.4rem] font-normal'>Lorem ipsum dolor sit amet consectetur. Ac amet libero facilisis hendrerit pulvinar massa placerat. </p>
        <button className='w-[12.7rem] h-[4rem]  rounded-[5px] gap-[1rem] text-[1.1rem] font-semibold text-[#FFFFFF] bg-[#952A2A] my-[2rem]'>
        Donate now
        </button>
      </div>
      <div className='mx-[4rem] h-[25rem] w-[26rem]  top-[9px] bg-[#C5B6D3] rounded-[40px]'>
        <img src={young} className='my-[-3rem] h-[28rem] '/>
      </div>
     
    </div>
    <Footer />
    </>
  )
}

export default App;
