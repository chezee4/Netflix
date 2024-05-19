import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from 'src/components/ui/breadcrumb'

import SidebarNav from 'src/features/sidebar-nav'

import UserWrapper from 'src/features/user-wrapper'
import Wrapper from 'src/layouts/wrapper'

type ProfileLayoutProps = {
  children: React.ReactNode
}

export default function ProfileLayout({ children }: ProfileLayoutProps) {
  return (
    <UserWrapper>
      <Wrapper>
        <div className="space-y-8 p-10 pb-16 block w-full mt-20">
          <div className="space-y-0.5">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Головна</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/profile?tab=profile">
                    Профіль
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
            <aside className="-mx-4 lg:w-1/6">
              <SidebarNav />
            </aside>
            <div className="w-full flex-1">{children}</div>
          </div>
        </div>
      </Wrapper>
    </UserWrapper>
  )
}
