---
title: Apply Patch
sidebar_label: Apply Patch
sidebar_position: 6
---

# apply_patch 도구

`apply_patch`는 대규모 소스 코드 수정 작업을 위해 설계된 전문적인 파일 수정 도구입니다.

## 🛠️ 왜 사용하나요?​

AI 에이전트가 1000줄이 넘는 파일을 수정할 때, 전체 파일을 다시 쓰는 방식은 토큰 비용이 너무 비싸고 속도가 매우 느립니다.`apply_patch`는 수정이 필요한 **특정 부분(Diff)**만 골라서 패치를 적용하므로 훨씬 빠르고 정확합니다.

---

## 📝 사용 형식 (Diff Format)​

에이전트는 내부적으로 다음과 같은 형식의 패치 명령문을 생성합니다.

```
/*** Begin Patch
File: src/app.js
---
- console.log("Old code");
+ console.log("New refined code");
---
End Patch ***/

```

## ✨ 이점​

- 정확성: 주변 줄 번호를 확인하여 정확한 위치에 코드를 삽입합니다.

- 안전성: 패치 적용 전 문법 에러가 발생할지 미리 시뮬레이션할 수 있습니다.

- 멀티 파일: 하나의 작업으로 여러 파일의 서로 다른 부분을 동시에 수정할 수 있습니다.

## 💡 팁​

에이전트가 전체 파일을 자꾸 다시 쓰려고 한다면, **"apply_patch 도구를 사용해서 필요한 부분만 고쳐줘"**라고 명시적으로 지시해 보세요.

서브 에이전트 (Sub-agents)
(/tools/subagents)다음
CLI 명령어 참조 (CLI Reference)
(/cli/)

- 🛠️ 왜 사용하나요?

- 📝 사용 형식 (Diff Format)

- ✨ 이점

- 💡 팁

Community

- Discord (https://discord.gg/openclaw)

- Twitter (https://twitter.com/openclaw)


