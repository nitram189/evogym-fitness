import Logo from '@/assets/Logo.png'

export const Footer = () => {
  return (
    <footer className='py-16 bg-primary-100'>

      <div className='mx-auto w-5/6 md:flex gap-16 justify-content'>

        <div className='mt-16 basis-1/2 md:mt-0'>
          <img src={Logo} alt='Evogym logo' />
          <p className='my-5'>Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</p>
          <p>© Evogym - All rights reserved</p>
        </div>

        <div className='mt-16 basis-1/4 md:mt-0'>
          <h4 className='font-semibold'>Links</h4>
          <p className='my-5'>Excepteur sint occaecat</p>
          <p className='my-5'>Officia deserunt mollit</p>
          <p className='my-5'>Deserunt mollit volup</p>
        </div>

        <div className='mt-16 basis-1/4 md:mt-0'>
          <h5 className='font-semibold'>Contact us</h5>
          <p className='my-5'>Esse cillum dolore</p>
          <p className='my-5'>(231) 432-6587</p>
        </div>

      </div>
    </footer>
  )
}