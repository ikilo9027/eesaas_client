import { PasswordValueProvider } from "@components/auth/hooks/passowrdHook"
import { Signin } from "@components/auth/signin"

export default function SigninMain() {
  return (
    <PasswordValueProvider>
      <Signin></Signin>
    </PasswordValueProvider>
  )
}
