import { useCallback, useState } from 'react'
import { useEffect } from 'react'
import { Switch } from '@headlessui/react'
import { MoonIcon, SunIcon } from '@heroicons/react/outline'
import { useTheme } from 'next-themes'

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

export default function Toggle() {
	const [enabled, setEnabled] = useState(false)
	const { resolvedTheme, setTheme } = useTheme()

	const toggleTheme = useCallback(() => {
		setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
	}, [resolvedTheme, setTheme])

	useEffect(() => {
		setTheme('light')
	}, [setTheme])

	return (
		<Switch
			checked={enabled}
			onClick={toggleTheme}
			onChange={setEnabled}
			onKeyDown={e => e.preventDefault()}
			onKeyUp={e => e.preventDefault()}
			className={classNames(
				enabled ? 'bg-gray-800' : 'bg-gray-200',
				'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none'
			)}
		>
			<div className="flex items-center justify-center focus:outline-none">
				<div className="relative">
					<div className="absolute flex items-center">
						<div className="ml-1 absolute flex items-center justify-between">
							<MoonIcon className="w-4 h-4  dark:stroke-sky-900 dark:fill-sky-900 stroke-sky-900" />
							<SunIcon className="w-4 h-4 stroke-yellow-400 fill-yellow-400" />
						</div>
						<span
							aria-hidden="true"
							className={classNames(
								enabled ? 'translate-x-5' : 'translate-x-0',
								'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white dark:bg-gray-900 first-letter:shadow ring-0 transition duration-200 ease-in-out focus:outline-none'
							)}
						/>
					</div>
				</div>
			</div>
		</Switch>
	)
}
