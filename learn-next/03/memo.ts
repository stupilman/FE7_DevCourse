/**
1. 기본 라우트
- app
-- about/
-- -- page.tsx
-- page.tsx

2. 중첩 라우트 (/about/contact)
- app
-- about/
-- -- contact/
-- -- -- page.tsx
-- -- page.tsx
-- page.tsx


3. 동적 라우트 - /post/1, /post/2
3.1 서버 컴포넌트 - params, searchParams
3.2 클라이언트 컴포넌트 - useParams(), useSearchParams()
- app
-- post/
-- -- [id]/
-- -- -- page.tsx
-- page.tsx


4. 중첩 동적 라우트 - /post/1, /post/1/comment/1
- app
-- post/
-- -- [id]/
-- -- -- page.tsx
-- -- -- comment/ 
-- -- -- -- [commentId]/
-- -- -- -- -- page.tsx
-- page.tsx

5. 캐치 올 세그먼트 /post(x), /post/1, /post/1/section...
- app
-- post/
-- -- [...id]/
-- -- -- page.tsx
-- page.tsx

6. 옵셔널 캐치 올 세그먼트 - /post, /post/1, /post/1/section
- app
-- post/
-- -- [[...id]]/
-- -- -- page.tsx
-- page.tsx

7. 프라이빗 폴더
- app
-- _about/
-- -- page.tsx
-- page.tsx

8. 라우트 그룸 - /(main)/about (x)    /about (o)
- app
-- (main)
-- -- about/
-- -- -- page.tsx
-- page.tsx
 */
