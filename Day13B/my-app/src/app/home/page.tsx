import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Home Page of My Website',
    description: '...',
}

function page() {
    // const [isLogin, setIsLogin] = useState<boolean>(false)
    return (
        <div>
            <h1 className='text-red-500 text-8xl'>Hello from Home Page


            </h1>
        </div>
    )
}

export default page
