import {
  BookOpen,
  BookType,
  FilePen,
  Hash,
  Presentation,
  Sparkles,
  SquareMenu,
  Sticker,
  TvMinimalPlay,
  UploadIcon,
} from 'lucide-react';

export const designTypes = [
  {
    label: 'Logo Design',
    icon: <FilePen className="h-6 w-6 text-white" />,
    bgColor: 'bg-emerald-500',
  },
  {
    label: 'Thumbnail',
    icon: <TvMinimalPlay className="h-6 w-6 text-white" />,
    bgColor: 'bg-rose-500',
  },
  {
    label: 'Sticker',
    icon: <Sticker className="h-6 w-6 text-white" />,
    bgColor: 'bg-indigo-700',
  },
  {
    label: 'Presentations',
    icon: <Presentation className="h-6 w-6 text-white" />,
    bgColor: 'bg-violet-500',
  },
  {
    label: 'Social Media Post',
    icon: <Hash className="h-6 w-6 text-white" />,
    bgColor: 'bg-pink-600',
  },
  {
    label: 'Business Card',
    icon: <BookType className="h-6 w-6 text-white" />,
    bgColor: 'bg-teal-500',
  },
  {
    label: 'Menu Card',
    icon: <SquareMenu className="h-6 w-6 text-white" />,
    bgColor: 'bg-red-500',
  },
  {
    label: 'Newsletter',
    icon: <BookOpen className="h-6 w-6 text-white" />,
    bgColor: 'bg-sky-600',
  },
  {
    label: 'Ai Background',
    icon: <Sparkles className="h-6 w-6 text-white" />,
    bgColor: 'bg-amber-400',
  },
  {
    label: 'Image Generation',
    icon: <Sparkles className="h-6 w-6 text-white" />,
    bgColor: 'bg-green-400',
  },
  {
    label: 'Upload',
    icon: <UploadIcon className="h-6 w-6 text-white" />,
    bgColor: 'bg-zinc-400',
  },
];
