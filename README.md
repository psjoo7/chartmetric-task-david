# Chartmetric Task
### David (Sung Jun) Park

## Responsive Layout
<img width="1440" alt="스크린샷 2023-08-22 오후 1 30 44" src="https://github.com/psjoo7/chartmetric-task-david/assets/66294314/1b41340f-ddc7-444d-aedc-973eb55ced44">

 Used responsive grid layout with max width 1500px, so it can make only 6 cards maximum.

## Infinite Scroll && Throttle
<img width="654" alt="스크린샷 2023-08-22 오후 1 49 37" src="https://github.com/psjoo7/chartmetric-task-david/assets/66294314/84809497-5b26-4510-9897-4abd932d67c0">

 Considering user experience, made infinite scroll instead of using pagination. 
 Pagination is useful when the users are searching for particular information, but in this case, because users are searching general informations based on actors image, infinite scroll would provide better user experience.
 Also, used lodash library for throttle. I used throttle instead of debounce also, considering user experience.

## Data fetch
<img width="655" alt="스크린샷 2023-08-22 오후 1 34 36" src="https://github.com/psjoo7/chartmetric-task-david/assets/66294314/4824163d-1138-45f8-aa51-39304a3c2d2a">

<img width="749" alt="스크린샷 2023-08-22 오후 1 33 05" src="https://github.com/psjoo7/chartmetric-task-david/assets/66294314/0d944bd0-c172-4d6b-846e-0c57deaac3bc">

 Made a custom hook called useTMDBdata for reusable code.

## Typescript 

 First, I used Javascript, and changed it to Typescript to stabilize code.

