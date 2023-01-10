import Image from 'next/image'
import { motion } from 'framer-motion'
import Transparentpfp from '@images/transparentpfp.png'
const IntroCard = ({ section }) => {
	return (
		<motion.div
			className="col-span-3 md:col-span-2 bg-white dark:bg-gray-900 rounded-3xl text-gray-600 dark:text-gray-500 aspect-2/1"
			whileHover="groupHover"
			animate={{ opacity: ['all'].includes(section) ? 1 : 1 }}
			variants={{
				groupHover: {
					scale: 1.01,
					transition: {
						duration: 0.1,
						ease: 'easeInOut',
					},
				},
			}}
		>
			<div className="relative overflow-hidden">
				<div className="md:hidden absolute top-8 right-10 rotate-180 -mt-10 w-[100px]">
					<Image className="dark:brightness-75" src={Transparentpfp} />
				</div>
				<div>
					<motion.div
						variants={{ groupHover: { y: 150 } }}
						style={{ rotate: 180, zIndex: 20 }}
						className="absolute -top-32 xl:-top-52 right-10 rotate-180 -mt-10 w-32 xl:w-60"
					>
						<Image className="dark:brightness-90" src={Transparentpfp} />{' '}
					</motion.div>
					<div className="text-3xl md:text-4xl xl:text-6xl xl:mt-10 m-6 ml-10 md:m-8 font-nunito font-bold">Hi, I&apos;m Ana!</div>
				</div>
				<div className="flex flex-col ml-10 justify-center">
					<div className="lg:text-xl xl:text-3xl xl:mr-20 font-nunito text-gray-500">
						{' '}
						I&apos;m an 18 year-old student doing a BASc in Interdisciplinary Problems and Methods @
						<a
							className="ml-1 underline-offset-2 underline focus:outline-none"
							href="https://lis.ac.uk"
							rel="noreferrer"
							target="_blank"
						>
							LIS
						</a>
					</div>
					<div className="flex lg:text-xl xl:text-3xl text-gray-500 mt-5">
						I&apos;m interested in art, keyboards and meowies!
					</div>
				</div>
			</div>
		</motion.div>
	)
}

export default IntroCard
