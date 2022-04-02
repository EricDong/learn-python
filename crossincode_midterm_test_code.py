#coding = 'utf-8'

# 打开文件,读取文件生成一维数组
with open('report.txt') as f:
    lines = f.readlines()
# lines

# 生成包含各科成绩的二维数组
scores = []
for line in lines:
    data = line.split()
    scores.append(data)
# scores

# 计算每位学生的总分和平均分
scores[0].extend(['总分','平均分'])
stu_avg = 0
for grade in scores[1:]:
    stu_sum = 0

    for s in grade[1:]:
        s = int(s)
        stu_sum += s
    stu_avg = round(stu_sum/len(grade[1:]), 1)
    grade.extend([str(stu_sum), str(stu_avg)])
# print(scores)

result = sorted(scores, key = lambda x: x[-2], reverse = True)
# print(result)
# print(len(result))
# print(len(result[0]))
# print(len(result[1]))


# 添加各科平均分
num1 = len(result) # 二维数组行数
num2 = len(result[1]) # 二维数组列数
sub_avg = [] # 学科平均分一维数组

for j in range(1, num2):
    if j < num2 -1:
        sub_sum = 0 # 每个学科的总分
        for k in range(1, num1):
            sub_sum += int(result[k][j])
        sub_avg.append(str(round(sub_sum/(num1-1), 1)))
    else:
        sub_sum = 0 # 每个学科的总分
        for k in range(1, num1):
            sub_sum += float(result[k][j])
        sub_avg.append(str(round(sub_sum/(num1-1), 1)))

# print(sub_avg)
# print(result)

sub_avg.insert(0,'平均')
# print(sub_avg)
result.insert(1, sub_avg)
# print(result)


# 替换不及格的成绩
for m in range(2,len(result)):
    for n in range(1,len(result[1])-2):
        if float(result[m][n]) < 60:
            result[m][n] = '不及格'
#             print(result[m][n])


#添加名次
result[0].insert(0, '名次')
r = 0
for round in result[1:]:
    round.insert(0, r)
    r += 1
print(result)

# 输出结果到result.txt
with open('result.txt', 'w') as f:
    for result_lines in result:
        for result_line in result_lines:
            f.write(str(result_line) + ' ')
        f.write('\n')
