import React from 'react'

const Footer = () => {
  return (
    <section className=''>
        <div className='w-screen h-[400px] flex justify-around relative'>
            <div className='w-[70%] text-left h-full rounded-2xl bg-[#B287FD] absolute -bottom-48 z-10 px-10 py-3 font-[Archivo] font-semibold'>
                <p className='text-[50px] italic font-medium'>Join our <span className='text-white not-italic font-extrabold'>Newsletter</span></p>
                <p className='uppercase text-[16px] font-semibold mt-6'>Read and share new perspectives on just about any topic. Everyone's welcome.</p>
                <ul  className='uppercase mt-10 list-disc ps-5'>
                    <li className='my-4'>create a free account</li>
                    <li className='my-4'>Write your story</li>
                </ul>
                <div className='relative group'>
                <input className='w-full h-[70px] border-2 mt-14 rounded-full border-black flex justify-between bg-transparent backdrop-blur-2xl px-14 text-[20px] placeholder-slate-800'
                type='email'
                placeholder='ENTER YOUR EMAIL'>
                    
                </input>
                <svg className='absolute top-7 right-12 group-hover:right-3 transition-all' width="359" height="16" viewBox="0 0 359 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M358.708 8.70711C359.099 8.31658 359.099 7.68342 358.708 7.29289L352.345 0.928932C351.954 0.538408 351.321 0.538408 350.93 0.928932C350.54 1.31946 350.54 1.95262 350.93 2.34315L356.587 8L350.93 13.6569C350.54 14.0474 350.54 14.6805 350.93 15.0711C351.321 15.4616 351.954 15.4616 352.345 15.0711L358.708 8.70711ZM0 9H358.001V7H0V9Z" fill="black"/>
                </svg>
                </div>
                

            </div>
        </div>        
        <div className='h-auto block'>
        <video className='rounded-2xl'
                src={'https://s3-figma-videos-production-sig.figma.com/video/984790381755042020/TEAM/0762/c225/-6214-4fef-b4fa-748f9aefcc3e?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qGyXFdXbYLLn~c73ieh4OlRhdfT1AUsaXJKozRbvf4vp5XsqYPUT5rfuCyPv9FPLqrvuy2vXIgJPil79st8YVF2TXL4q~j5QhxmZeqCM6Wuc1piPLzbedzn-Csa2x6mV07dDa2vcemhbq3wWYw5bkSu1nWn8qJO~~EmDMUHwT4PqzN~6PY2gLFnkZhFCEPyWO-KDw1F0gNS-iaxgx4yYxTA4urQ18HdObfHWTymG0mgzc5KbuIG8K9vZiqywV7deh4QxiDV1wycPihwAHkiFUpxkQkHLP4DQKqo1phUgMGScj8LkyWMy~Z0GWo1o9YyshNv3wNhH2U67cjYOInlvVw__'}
                autoPlay
                loop
                muted
                style={{ 
                    position: 'absolute', 
                    width: '100%', 
                    height: '50%',
                    objectFit: 'cover',
                    overflow:'hidden'
                }} 
            />
        </div>
        <div className='bg-black w-full h-screen text-white mt-[330px] pt-40 z-20'>
            <div className='w-[70%] h-[300px] mx-auto flex justify-around  text-[18px]'>
                <div className='w-[30%]'>
                    <ul className='flex flex-col justify-between uppercase h-full'>
                        <li className='h-auto'>Home 1</li>
                        <li className='h-auto'>Home 2</li>
                        <li className='h-auto'>Blogs</li>
                        <li className='h-auto'>Blogs Details 1</li>
                        <li className='h-auto'>Blogs Details 2</li>
                        <li className='h-auto'>Categories</li>
                    </ul>
                </div>
                <div className='w-[30%]'>
                    <ul className='flex flex-col justify-between uppercase h-full'>
                        <li className='h-auto'>About</li>
                        <li className='h-auto'>Authors</li>
                        <li className='h-auto'>Contact</li>
                        <li className='h-auto'>Search Page</li>
                        <li className='h-auto'>Archive Page</li>
                        <li className='h-auto'>Privacy Policy</li>
                    </ul>
                </div>
                <div className='w-[30%] flex flex-col justify-between uppercase h-full'>
                    <div className='w-full mx-auto h-[60%] rounded-2xl border-[1px] border-white p-4'>
                        <p className=''>Stay up to date</p>
                        <p className='text-[13px] mt-5'>Get notified when I publish something new, and unsubscribe at any time.</p>
                        <div className='relative group'>
                            <input className='w-full h-[40px] border-2 mt-4 rounded-full border-white flex justify-between bg-transparent backdrop-blur-2xl px-4 text-[10px] placeholder-yellow-50'
                            type='email'
                            placeholder='ENTER YOUR EMAIL'>
                                
                            </input>
                            
                            <svg className='absolute top-3 right-7 group-hover:right-3 transition-all' width="57" height="16" viewBox="0 0 57 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M56.7071 8.70711C57.0976 8.31658 57.0976 7.68342 56.7071 7.29289L50.3431 0.928932C49.9526 0.538408 49.3195 0.538408 48.9289 0.928932C48.5384 1.31946 48.5384 1.95262 48.9289 2.34315L54.5858 8L48.9289 13.6569C48.5384 14.0474 48.5384 14.6805 48.9289 15.0711C49.3195 15.4616 49.9526 15.4616 50.3431 15.0711L56.7071 8.70711ZM0 9L56 9V7L0 7L0 9Z" fill="white"/>
                            </svg>
                        </div>
                    </div>
                    <div className='flex justify-around'>
                        <div>
                            <img className='h-12 cursor-pointer' src='https://s3-alpha-sig.figma.com/img/9d32/6a74/221986d79bea7e5a29bae3a3e9eaa357?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O1u0AdzRt~83WTEhu6stsD1GdGj0UvJtaqj8rUL~duVLfbUiUUO9oicwK-0Qixq5o7adM9oDvJEmkF7C7-HXGxWhpp2~9ICfwc8LAcCk-CCNYypDQcQLYS53OStGzHHidnKS7Lfr2L6ehnt46Ad02ycxjfTpXkFw69M6cjCks7PvUYVVVaA5lAfE1s9tTMrXgxtT22spllbffaXNJxml1UMfB0J1-eahVm94N6-Gub6XYH-vix6Wjv1YVVj-9zXjbkVJ~26gYuh7cdpuRJ-i0T4K0R2DfgCmK8BQPJPIy0bQ1KdR24vtH2T6PzMYQPmHxGo-gqw18v4j1zEmrfcl-w__'/>
                        </div>
                        <div>
                            <img className='h-12 cursor-pointer' src='https://s3-alpha-sig.figma.com/img/c05c/e01d/577f6fa099e5cba7b662cd0bdca8e458?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m-9l466BlAYF4npCgIEru4418fZ1FXn3eLx28poMFctts7e8YlmwqKIHWxLoBnp0Lf97l-kKNtIvCphACzXnAh9-ozQCcwJnRDqfOVTgG4en2kRsO8QdMtXYXcCLLHy4ZXf8UBTWmeb9Ls--Jov~uuc1RFBs48j-DO1VbU0yanxJYXHnS9q~trncbaT5v-6PxeU3p1uYhveoBnZ1z6yx9qkZgxN2FgbA-hBmGBBMdFhpR4-wKSrJ9F2cZMTXSSaeJxo7VOIUzwcxNWVCnugawgE0rxix5B7roWDB2WE3keapl0aaFaFyhTZCfJRmP0RRH16jWLrVg~uYwnNrxKq4Fg__'/>
                        </div>
                        <div>
                            <img className='h-12 cursor-pointer' src='https://s3-alpha-sig.figma.com/img/3c3d/058e/19b6392a744b2dfcb4d33eaea8b505da?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NwXGIkO5s~mjZfBw0R6NbPmnsO7NFlY3iO1Zn860hVHX3O4yvdItqMauFd7sn3r0oY6S4ydOACjkp71Hiyhc-Tc5UumUXKRiP5vOoghvWy7XhPWFg5SVZiwYBnvvqYFnX5cKYVR2dCAIUX0s-jSRzL1NkYZLzElkd6HfWkQmdGkRU1E5GEnE9z6g1-wL32uG~PPbd~oVXmIrWuGFFPlAlZ218HUnk2MM8W0TLrT3j0IFHS55mE040r0SSUo7jGlas4Qo-c7mlc7bF-RM-U6YujhpkSeJ5E1NNBI5HLO1YUzn8CybolG51DybwwZaMchOkzgNJziKdviu7FAcohjiaQ__'/>
                        </div>
                        <div>
                            <img className='h-12 cursor-pointer' src='https://s3-alpha-sig.figma.com/img/9d32/6a74/221986d79bea7e5a29bae3a3e9eaa357?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O1u0AdzRt~83WTEhu6stsD1GdGj0UvJtaqj8rUL~duVLfbUiUUO9oicwK-0Qixq5o7adM9oDvJEmkF7C7-HXGxWhpp2~9ICfwc8LAcCk-CCNYypDQcQLYS53OStGzHHidnKS7Lfr2L6ehnt46Ad02ycxjfTpXkFw69M6cjCks7PvUYVVVaA5lAfE1s9tTMrXgxtT22spllbffaXNJxml1UMfB0J1-eahVm94N6-Gub6XYH-vix6Wjv1YVVj-9zXjbkVJ~26gYuh7cdpuRJ-i0T4K0R2DfgCmK8BQPJPIy0bQ1KdR24vtH2T6PzMYQPmHxGo-gqw18v4j1zEmrfcl-w__'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative w-full h-[200px] mt-12 overflow-hidden'> 
                <p className='text-[230px] font-[Archivo] flex justify-around font-extrabold'>
                    <span>Blog</span>
                    <span>Blog</span>
                    <span>Blog</span>
                </p>
            </div>
        </div>
        
    </section>
  )
}

export default Footer