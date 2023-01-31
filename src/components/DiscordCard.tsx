import { motion } from 'framer-motion'
import { ArrowCircleUpIcon } from '@heroicons/react/outline'
import Image from 'next/image'



const DiscordCard = ({ section }) => {
	return (
		<motion.a
			href="https://discord.gg/UfYzpX9TwQ"
			target="_blank"
			rel="noreferrer"
			animate={{ opacity: ['all', 'contact'].includes(section) ? 1 : 0.3 }}
			whileHover="groupHover"
			variants={{
				groupHover: {
					scale: 1.01,
					transition: {
						duration: 0.1,
						ease: 'easeInOut',
					},
				},
			}}
			className="rounded-3xl bg-indigo-300 dark:bg-indigo-800 flex justify-center items-center col-span-1 relative aspect-square group"
		>
			<div className="h-full w-full flex justify-center items-center">
				<img src="/images/staticdiscordspinner.png" className="absolute w-72 md:w-72 lg:w-72 xl:w-[500px] xl:scale-125 group-hover:opacity-0" />
				<img src="/images/discordspinner.gif" className="absolute w-72 md:w-72 lg:w-72 xl:w-[500px] xl:scale-125 group-hover:opacity-100 opacity-0" />
			</div>
			<ArrowCircleUpIcon className="absolute stroke-white dark:stroke-gray-900 bottom-0 right-0 m-2 md:mb-5 xl:m-5 
			rotate-45 mb-2 mr-2 w-8 h-8 lg:w-14 lg:h-14 md:w-10 md:h-10 hover:text-white" />
		</motion.a>
	)
}

export default DiscordCard
