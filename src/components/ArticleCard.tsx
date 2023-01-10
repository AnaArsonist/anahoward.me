import { motion } from 'framer-motion'
import { DocumentTextIcon, ArrowCircleUpIcon } from '@heroicons/react/outline'

const ArticleCard = ({ section }) => {
	return (
		<motion.a
			whileHover="groupHover"
			href="https://typefully.com/AnaArsonist"
			rel="noreferrer"
			animate={{ opacity: ['all', 'about'].includes(section) ? 1 : 0.3 }}
			target="_blank"
			variants={{
				groupHover: {
					scale: 1.01,
					transition: {
						duration: 0.1,
						ease: 'easeInOut',
					},
				},
			}}
			className="relative flex rounded-3xl dark:bg-gray-900 bg-white col-span-2 aspect-2/1"
		>
			<div className="flex ml-4 flex-col w-full justify-center">
				<div className="text-2xl xl:text-6xl md:text-4xl md:ml-5 font-bold text-gray-600 rounded-3xl">
					Articles
					<DocumentTextIcon className="inline-flex ml-2 w-5 md:w-10" />{' '}
				</div>
				<div className="mt-1 text-xs xl:text-3xl xl:mr-20 md:text-lg md:ml-5 text-gray-500">
					Here you can see some of my projects and some of my silly rants!
				</div>
				<ArrowCircleUpIcon className="absolute stroke-gray-300 dark:stroke-gray-600 bottom-0 right-0 m-2 md:m-5 rotate-45 md:w-[60px] md:h-[60px] w-[30px] h-[30px]" />
			</div>
		</motion.a>
	)
}
export default ArticleCard
