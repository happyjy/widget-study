# widget-study


# 20190410
* 과제1 엔터 Focus 이동
* 과제2 Radio, SelectBox 생성 
* 과제3 form의 Serialize 생성
* 과제3.1 저장click -> form안에 있는 데이터 serialize로 저장 
		  다시작성click-> 원복
* 과제4 checkbox 클릭시 value -> input box에 입력하기

# 참고 
* onKeydomhanlder 
ecount.page.js

* _onFocusOutHanler
- window에 바인드 되어 있다고 ? 

* control이 Readonly면 onNextFocus로 

* enter시 3개 event
-onNextFocus: 
-onFocusout: trigger 부모에
-onFocus: 다음 contorl에 index는 0으로 

* form에 마지막 cid, cindex가 수행될때 
-> 부모에 알려줘 && focusout
-> 그리고 다음 control로 이동해~

* form도 Delegator가 있어야 해
* 사용자가 focus이동설정할 수도 있어요
* control에 여러개 el이 있을 수 있어 
control에 el마다 focus이동하고
contorl에 자기 el찾고 없어 
-> 상위에 delegator로 던져 다음 focus로 이동

* contorl의 instance를 찾아라 
-> cid로 -> dome에 밖에 
* control에 여러 dom이 있을 수 있어 -> cid에서 idx를 관리해야해

*onNextFocus
ON_MOVE_FOCUS

form_focusout
_onFocusOutHandler

---
---
---
---
---


# 20190318
sample을 실행 한다. 

1. create widget at Container(header, contents, footer)
2. add observer pattern, delegator
3. add form layer(added widget-input, checkbox)



* 요구사항 
- 첨부 사진의 page 구현
- 요구사항
1. 컨텐츠 내부의 Form Layout 구현
2. 메뉴 항목의 체크박스 클릭 시 마다 체크한 항목들을 부서명 Input에 출력
3. 저장 버튼 클릭 시 Form 데이터 출력
4. 다시작성 클릭 시 가장 최근에 저장  한 Form 데이터로 세팅
5. 디자인은 신경쓸 필요 없으며, header는 할 수 있는 만큼 구현할 것
- 기간
: 차주 월요일까지



