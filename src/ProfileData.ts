import { Address, Skill, Img } from './types';

export const address = {
	linkedin: 'https://www.linkedin.com/in/mateo-arteaga-675a381a2/',
	dribble: 'https://dribbble.com/M4rteaga',
	github: 'https://github.com/M4rteaga/vite-portfolio',
} as Address;

export const languages: Skill[] = [
	{
		name: 'HTML',
		level: 'w-3/4',
	},
	{
		name: 'CSS',
		level: 'w-1/2',
	},
	{
		name: 'JavaScript',
		level: 'w-2/3',
	},
	{
		name: 'Typescript',
		level: 'w-1/5',
	},
	{
		name: 'Go',
		level: 'w-1/5',
	},
];

export const frameworks: Skill[] = [
	{
		name: 'Tailwindcss',
		level: 'w-3/4',
	},
	{
		name: 'Vue',
		level: 'w-2/5',
	},
	{
		name: 'React',
		level: 'w-1/6',
	},
	{
		name: 'Express',
		level: 'w-2/4',
	},
];

export const imgs: Img[] = [
	{
		imgName: 'GraceHooper.webp',
		altTag: 'GraceHooper',
	},
	{
		imgName: 'Hidia.webp',
		altTag: 'Hidia',
		backColor: 'bg-secondary-green-solid',
	},
	{
		imgName: 'Portfolio.webp',
		altTag: 'Portfolio',
		backColor: 'bg-primary-solid',
	},
];
