import {
  SiCanvas,
  SiClaude,
  SiCloudflare,
  SiCss,
  SiDart,
  SiFastapi,
  SiFigma,
  SiFlutter,
  SiGit,
  SiGithub,
  SiGithubcopilot,
  SiGooglegemini,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiOpenaigym,
  SiOpenapiinitiative,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
} from 'react-icons/si'
import { FaNodeJs, FaRegFileExcel } from 'react-icons/fa'
import { TbMessageChatbotFilled, TbSettingsSpark, TbSparkles } from 'react-icons/tb'

export const technologyGroups = [
  {
    title: 'Frontend',
    items: [
      { name: 'HTML', Icon: SiHtml5, color: 'text-orange-500' },
      { name: 'CSS', Icon: SiCss, color: 'text-blue-500' },
      { name: 'JavaScript', Icon: SiJavascript, color: 'text-yellow-500' },
      { name: 'TypeScript', Icon: SiTypescript, color: 'text-blue-500' },
      { name: 'React', Icon: SiReact, color: 'text-cyan-400' },
      { name: 'Next.js', Icon: SiNextdotjs, color: 'text-gray-900 dark:text-white' },
      { name: 'Tailwind CSS', Icon: SiTailwindcss, color: 'text-cyan-500' },
      { name: 'Vite', Icon: SiVite, color: 'text-purple-500' },
    ],
  },
  {
    title: 'Mobile Development',
    items: [
      { name: 'Flutter', Icon: SiFlutter, color: 'text-sky-500' },
      { name: 'Dart', Icon: SiDart, color: 'text-sky-600' },
    ],
  },
  {
    title: 'Backend & API',
    items: [
      { name: 'Python', Icon: SiPython, color: 'text-blue-500' },
      { name: 'FastAPI', Icon: SiFastapi, color: 'text-emerald-500' },
      { name: 'Node.js', Icon: FaNodeJs, color: 'text-green-600' },
    ],
  },
  {
    title: 'Generative AI',
    items: [
      { name: 'GPT', Icon: SiOpenaigym, color: 'text-emerald-500' },
      { name: 'Gemini', Icon: SiGooglegemini, color: 'text-blue-500' },
      { name: 'GitHub Copilot', Icon: SiGithubcopilot, color: 'text-gray-700 dark:text-gray-100' },
      { name: 'Claude', Icon: SiClaude, color: 'text-orange-500' },
      { name: 'Prompt Engineering', Icon: TbSparkles, color: 'text-purple-500' },
      { name: 'AI Integration', Icon: TbSettingsSpark, color: 'text-cyan-500' },
      { name: 'OpenAI API', Icon: SiOpenapiinitiative, color: 'text-emerald-500' },
      { name: 'AI Chatbots', Icon: TbMessageChatbotFilled, color: 'text-blue-500' },
    ],
  },
  {
    title: 'Design & Prototyping',
    items: [
      { name: 'Canva', Icon: SiCanvas, color: 'text-cyan-500' },
      { name: 'Figma', Icon: SiFigma, color: 'text-purple-500' },
    ],
  },
  {
    title: 'Data Analysis',
    items: [
      { name: 'Python', Icon: SiPython, color: 'text-blue-500' },
      { name: 'Data Visualization', Icon: SiCanvas, color: 'text-purple-500' },
      { name: 'Excel', Icon: FaRegFileExcel, color: 'text-green-600' },
    ],
  },
  {
    title: 'Tools & Deployment',
    items: [
      { name: 'Vercel', Icon: SiVercel, color: 'text-gray-900 dark:text-white' },
      { name: 'Cloudflare', Icon: SiCloudflare, color: 'text-orange-500' },
      { name: 'GitHub', Icon: SiGithub, color: 'text-gray-800 dark:text-white' },
      { name: 'Git', Icon: SiGit, color: 'text-orange-600' },
    ],
  },
]

export const featuredTechnologies = technologyGroups.flatMap((group) => group.items).slice(0, 16)
