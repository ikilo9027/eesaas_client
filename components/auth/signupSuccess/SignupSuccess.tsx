import Button from "@components/common/Button"
import Image from "next/image"
import router from "next/router"
import {
  SignupSuccessMain,
  SignupSuccessBox,
  SignupSuccessLogo,
  SignupSuccessTextBox,
  SignupSuccessText,
  SignupSuccessLink,
  SignupSuccessBUttonBox,
  TestBox,
} from "./SignupSuccess.styles"

export default function SignupSuccess() {
  return (
    <SignupSuccessMain>
      <SignupSuccessBox>
        <SignupSuccessLogo>
          <Image src="/favicon.png" alt="Image" width={120} height={120} />
        </SignupSuccessLogo>
        <SignupSuccessTextBox>
          <SignupSuccessText>회원가입을 축하합니다!</SignupSuccessText>
          <SignupSuccessLink>이메일 인증이 완료되었습니다.</SignupSuccessLink>
        </SignupSuccessTextBox>
        <SignupSuccessBUttonBox>
          <TestBox>
            <Button
              label="시작하기"
              borderRadius="4px"
              height="52px"
              fontSize="20px"
              backgroundColor="#C32632"
              onClick={() => router.push("/auth/signin")}
            />
          </TestBox>
        </SignupSuccessBUttonBox>
      </SignupSuccessBox>
    </SignupSuccessMain>
  )
}
