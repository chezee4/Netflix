import { Skeleton } from 'src/components/ui/skeleton'

export function SkeletonCardFilm() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[210px] w-[280px] rounded-xl" />
      <div className="space-y-4">
        <Skeleton className="h-4 w-[280px]" />
        <Skeleton className="h-6 w-[280px]" />
      </div>
    </div>
  )
}
