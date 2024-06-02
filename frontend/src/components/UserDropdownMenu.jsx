import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Link } from 'react-router-dom'

import { User } from 'lucide-react'

export default function UserDropdownMenu() {
  return (
    <li className='mb-8 md:ms-8 md:mb-0'>
      <DropdownMenu>
        <DropdownMenuTrigger><span className='flex gap-1 text-[#A9D4E2] text-lg hover:text-gray-400 duration-500'><User size={25} />User</span></DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link to='/update-user'>Edit Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to='/add-testimonial'>Add Testimonial</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </li>
  )
}
