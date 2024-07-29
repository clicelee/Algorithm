# [level 1] 폰켓몬 - 1845 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/1845) 

### 성능 요약

메모리: 34.1 MB, 시간: 0.59 ms

### 구분

코딩테스트 연습 > 해시

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2024년 07월 30일 02:24:13

### 문제 설명

<p>당신은 폰켓몬을 잡기 위한 오랜 여행 끝에, 홍 박사님의 연구실에 도착했습니다. 홍 박사님은 당신에게 자신의 연구실에 있는 총 N 마리의 폰켓몬 중에서<web-highlight class="webhighlights-highlight" data-highlight-id="99048071-f3c9-4099-8de4-dd632c0ca83e" data-highlight-split-type="both" data-highlight-id-extra="6df826ec-ab30-4123-beef-658d1447c74b" markid="66a7c91477b9e0bd7b171418" media-type="blockquote" style="background-color: rgb(247, 194, 214); color: rgb(0, 0, 0); cursor: pointer;">N/2마리</web-highlight>를 가져가도 좋다고 했습니다.<br>
홍 박사님 연구실의 폰켓몬은 종류에 따라 번호를 붙여 구분합니다. 따라서<web-highlight class="webhighlights-highlight" data-highlight-id="933480e9-bee9-4fca-8f68-0e0b4e6f9391" data-highlight-split-type="both" data-highlight-id-extra="" markid="66a7c91f77b9e0bd7b171419" media-type="blockquote" style="background-color: rgb(247, 194, 214); color: rgb(0, 0, 0); cursor: pointer;"> 같은 종류의 폰켓몬은 같은 번호</web-highlight>를 가지고 있습니다. 예를 들어 연구실에 총 4마리의 폰켓몬이 있고, 각 폰켓몬의 종류 번호가 [3번, 1번, 2번, 3번]이라면 이는 3번 폰켓몬 두 마리, 1번 폰켓몬 한 마리, 2번 폰켓몬 한 마리가 있음을 나타냅니다. 이때, 4마리의 폰켓몬 중 2마리를 고르는 방법은 다음과 같이 6가지가 있습니다.</p>

<ol>
<li>첫 번째(3번), 두 번째(1번) 폰켓몬을 선택</li>
<li>첫 번째(3번), 세 번째(2번) 폰켓몬을 선택</li>
<li>첫 번째(3번), 네 번째(3번) 폰켓몬을 선택</li>
<li>두 번째(1번), 세 번째(2번) 폰켓몬을 선택</li>
<li>두 번째(1번), 네 번째(3번) 폰켓몬을 선택</li>
<li>세 번째(2번), 네 번째(3번) 폰켓몬을 선택</li>
</ol>

<p>이때, 첫 번째(3번) 폰켓몬과 네 번째(3번) 폰켓몬을 선택하는 방법은 한 종류(3번 폰켓몬 두 마리)의 폰켓몬만 가질 수 있지만, 다른 방법들은 모두 두 종류의 폰켓몬을 가질 수 있습니다. 따라서 위 예시에서 가질 수 있는 폰켓몬 종류 수의 최댓값은 2가 됩니다.<br>
당신은 최대한 다양한 종류의 폰켓몬을 가지길 원하기 때문에,<web-highlight class="webhighlights-highlight" data-highlight-id="7d250d6f-b51b-460d-8e49-05ac193e7be6" data-highlight-split-type="both" data-highlight-id-extra="" markid="66a7c94777b9e0bd7b17141a" media-type="blockquote" style="background-color: rgb(247, 194, 214); color: rgb(0, 0, 0); cursor: pointer;"> 최대한 많은 종류</web-highlight>의 폰켓몬을 포함해서 N/2마리를 선택하려 합니다. N마리 폰켓몬의 종류 번호가 담긴 배열 <web-highlight class="webhighlights-highlight" data-highlight-id="5674a026-598d-46a2-b694-140a15d14999" data-highlight-split-type="both" data-highlight-id-extra="" markid="66a7c94f77b9e0bd7b17141b" media-type="blockquote" style="background-color: rgb(247, 194, 214); color: rgb(0, 0, 0); cursor: pointer;">nums</web-highlight>가 매개변수로 주어질 때, N/2마리의 폰켓몬을 선택하는 방법 중, 가장 많은 종류의 폰켓몬을 선택하는 방법을 찾아, 그때의 폰켓몬 종류 번호의 개수를 return 하도록 solution 함수를 완성해주세요.</p>

<h5>제한사항</h5>

<ul>
<li>nums는 폰켓몬의 종류 번호가 담긴 1차원 배열입니다.</li>
<li>nums의 길이(N)는 1 이상 10,000 이하의 자연수이며, 항상 짝수로 주어집니다.</li>
<li>폰켓몬의 종류 번호는 1 이상 200,000 이하의 자연수로 나타냅니다.</li>
<li>가장 많은 종류의 폰켓몬을 선택하는 방법이 여러 가지인 경우에도, 선택할 수 있는 폰켓몬 종류 개수의 최댓값 하나만 return 하면 됩니다.</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>nums</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>[3,1,2,3]</td>
<td>2</td>
</tr>
<tr>
<td>[3,3,3,2,2,4]</td>
<td>3</td>
</tr>
<tr>
<td>[3,3,3,2,2,2]</td>
<td>2</td>
</tr>
</tbody>
      </table>
<h5>입출력 예 설명</h5>

<p>입출력 예 #1<br>
문제의 예시와 같습니다.</p>

<p>입출력 예 #2<br>
6마리의 폰켓몬이 있으므로, 3마리의 폰켓몬을 골라야 합니다.<br>
가장 많은 종류의 폰켓몬을 고르기 위해서는 3번 폰켓몬 한 마리, 2번 폰켓몬 한 마리, 4번 폰켓몬 한 마리를 고르면 되며, 따라서 3을 return 합니다.</p>

<p>입출력 예 #3<br>
6마리의 폰켓몬이 있으므로, 3마리의 폰켓몬을 골라야 합니다.<br>
가장 많은 종류의 폰켓몬을 고르기 위해서는 3번 폰켓몬 한 마리와 2번 폰켓몬 두 마리를 고르거나, 혹은 3번 폰켓몬 두 마리와 2번 폰켓몬 한 마리를 고르면 됩니다. 따라서 최대 고를 수 있는 폰켓몬 종류의 수는 2입니다.</p>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges