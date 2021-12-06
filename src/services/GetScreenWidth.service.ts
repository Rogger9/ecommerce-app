const maxMobileScreenWidth = 768

export const GetScreenWidth = () => {
  const widthScreen = window.innerWidth
  const isMobileScreen = widthScreen <= maxMobileScreenWidth
  return { isMobileScreen }
}
