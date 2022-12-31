import { motion } from 'framer-motion'
import { ArrowCircleUpIcon, MailIcon } from '@heroicons/react/outline'
const MailCard = ({ section }) => {
	return (
		<motion.a
			href="mailto:hello@anahoward.me"
			target="_blank"
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
				<MailIcon className="text-white dark:text-gray-900 w-16 h-16 md:w-36 md:h-36" />
			</div>
			<ArrowCircleUpIcon className="absolute stroke-white dark:stroke-gray-900 bottom-0 right-0 m-2 md:m-5 rotate-45 md:w-[60px] md:h-[60px] w-[30px] h-[30px] hover:text-white" />
		</motion.a>
	)
}

export default MailCard
