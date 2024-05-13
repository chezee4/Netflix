import Link from 'next/link'

import SignUpForm from 'src/features/form/sign-up-form'

export default function AuthenticationPage() {
  return (
    <div className="lg:p-8">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Створіть акаунт</h1>
          <p className="text-sm text-muted-foreground">
            Введіть свій user name та password для реєстрації
          </p>
        </div>
        <SignUpForm />
        <p className="px-8 text-center text-sm text-muted-foreground">
          Натискаючи продовжити, ви погоджуєтеся з нашою{' '}
          <Link
            href="/privacy"
            className="underline underline-offset-4 hover:text-primary"
          >
            Політикою конфіденційності
          </Link>
          .
        </p>
      </div>
    </div>
  )
}
