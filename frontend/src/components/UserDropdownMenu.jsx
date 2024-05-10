import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

export default function UserDropdownMenu() {
  return (
    <li className='mb-8 md:ms-8 md:mb-0'>
      <DropdownMenu>
        <DropdownMenuTrigger><span className='text-[#A9D4E2] text-lg hover:text-gray-400 duration-500'>User</span></DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <a href='/update-user'>Edit Profile</a>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <a href='/add-testimonial'>Add Testimonial</a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </li>
  )
}
