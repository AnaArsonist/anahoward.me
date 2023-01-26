import { motion } from 'framer-motion'
import { ArrowCircleUpIcon, MailIcon } from '@heroicons/react/outline'
const MailCard = ({ section }) => {
	return (
		<motion.a
			href="mailto:hello@anahoward.me"
			target="_blank"
			rel="noreferrer"
			animate={{ opacity: ['all', 'contact'].includes(section) ? 1 : 0.3 }}
			className="rounded-3xl bg-teal-300 saturate-50 dark:saturate-150 dark:bg-teal-800 flex justify-center items-center col-span-1 relative"
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
		>
			<div className="flex items-center w-full justify-center aspect-square">
				<MailIcon className="text-white dark:text-gray-900 w-10 md:w-20 lg:w-32 xl:w-1/2" />
			</div>
			<ArrowCircleUpIcon className="absolute stroke-white dark:stroke-gray-900 bottom-0 right-0 md:mb-5 xl:m-5 rotate-45 mb-2 mr-2 w-8 h-8 lg:w-14 lg:h-14 md:w-10 md:h-10 hover:text-white" />
		</motion.a>
	)
}

export default MailCard
