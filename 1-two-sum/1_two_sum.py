class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        seen={}
        for i, v in enumerate(nums):
            key=target-v
            if key in seen:
                return [seen[key],i]
            seen[v]=i