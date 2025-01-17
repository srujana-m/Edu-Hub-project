import React from 'react'
import './code.css';
import Contact from '../contact/Contact';

export default function Code() {
    return (
        <div className="tot">
        <section id="faq1" class="faq1 section-bg1">
  <div class="container">

    <div class="section-title1">
      <br/>
      <h2>Coding Questions</h2>
      <p><b>Here are some of the Coding questions by which you can practice and compile your code in our provided EduHub compiler. You can also view the full question. Code! Compile! Learn!</b></p>
    </div>
  <br/>
    <div class="faq-list1">
      <ul>
        <li data-aos="fade-up">
          <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" class="collapse" data-bs-target="#faq-list1-1">Sum and Difference of Two Numbers <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
          <div id="faq-list1-1" class="collapse show" data-bs-parent=".faq-list1">
            <p>
            Your task is to take two numbers of int data type, two numbers of float data type as input and output their sum:

Declare  variables: two of type int and two of type float.
Read  lines of input from stdin (according to the sequence given in the 'Input Format' section below) and initialize your  variables.
Use the  and  operator to perform the following operations:
Print the sum and difference of two int variable on a new line.
Print the sum and difference of two float variable rounded to one decimal place on a new line.
            </p>
            <br/><br/>
            <a href="https://www.hackerrank.com/challenges/sum-numbers-c/problem" id="dt" className="btn btn-primary">View Question</a>
            <a href="https://eduhub-ide.netlify.app/" id="dt" className="btn btn-primary">EduHub Ide</a>
          </div>
        </li>

        <li data-aos="fade-up" data-aos-delay="100">
          <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list1-2" class="collapsed">Bitwise Operators<i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
          <div id="faq-list1-2" class="collapse" data-bs-parent=".faq-list1">
            <p>
            In this challenge, you will use logical bitwise operators. All data is stored in its binary representation. The logical operators, and C language, use  to represent true and  to represent false. The logical operators compare bits in two numbers and return true or false,  or , for each bit compared.

Bitwise AND operator & The output of bitwise AND is 1 if the corresponding bits of two operands is 1. If either bit of an operand is 0, the result of corresponding bit is evaluated to 0. It is denoted by &.

Bitwise OR operator | The output of bitwise OR is 1 if at least one corresponding bit of two operands is 1. It is denoted by |.

Bitwise XOR (exclusive OR) operator ^ The result of bitwise XOR operator is 1 if the corresponding bits of two operands are opposite. It is denoted by .
            </p>
            <br/><br/>
            <a href="https://www.hackerrank.com/challenges/bitwise-operators-in-c/problem" id="dt" className="btn btn-primary">View Question</a>
            <a href="https://eduhub-ide.netlify.app/" id="dt" className="btn btn-primary">EduHub Ide</a>
          </div>
        </li>

        <li data-aos="fade-up" data-aos-delay="200">
          <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list1-3" class="collapsed">Array Reversal<i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
          <div id="faq-list1-3" class="collapse" data-bs-parent=".faq-list1">
            <p>
            Given an array, of size n, reverse it.

Example: If array,[1,2,3,4,5] , after reversing it, the array should be, .[5,4,3,2,1]
            </p>
            <br/><br/>
            <a href="https://www.hackerrank.com/challenges/reverse-array-c/problem" id="dt" className="btn btn-primary">View Question</a>
            <a href="https://eduhub-ide.netlify.app/" id="dt" className="btn btn-primary">EduHub Ide</a>
          </div>
        </li>

        <li data-aos="fade-up" data-aos-delay="300">
          <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list1-4" class="collapsed">Perfect Numbers <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
          <div id="faq-list1-4" class="collapse" data-bs-parent=".faq-list1">
            <p>
            Given a number N, check if a number is perfect or not. A number is said to be perfect if sum of all its factors excluding the number itself is equal to the number.

 
            </p>
            <br/><br/>
            <a href="https://practice.geeksforgeeks.org/problems/perfect-numbers3207/1" id="dt" className="btn btn-primary">View Question</a>
            <a href="https://eduhub-ide.netlify.app/" id="dt" className="btn btn-primary">EduHub Ide</a>
          </div>
        </li>

        <li data-aos="fade-up" data-aos-delay="400">
          <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list1-5" class="collapsed">Factors Sum  <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
          <div id="faq-list1-5" class="collapse" data-bs-parent=".faq-list1">
            <p>
            Given a number N, find the sum of all its factors.


Example 1:

Input: N = 30
Output: 72
Explanation: Factors sum 1 + 2 + 3 + 5 
+ 6 + 10 + 15 + 30 = 72
            </p>
            <br/><br/>
            <a href="https://practice.geeksforgeeks.org/problems/factors-sum2016/1" id="dt" className="btn btn-primary">View Question</a>
            <a href="https://eduhub-ide.netlify.app/" id="dt" className="btn btn-primary">EduHub Ide</a>
          </div>
        </li>
        <li data-aos="fade-up" data-aos-delay="300">
          <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list1-6" class="collapsed">Palindrome or not<i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
          <div id="faq-list1-6" class="collapse" data-bs-parent=".faq-list1">
            <p>
            Given an integer, check whether it is a palindrome or not.

Example 1:

Input: n = 55555
Output: Yes

Example 2:

Input: n = 123
Output: No
            </p>
            <br/><br/>
            <a href="https://practice.geeksforgeeks.org/problems/palindrome0746/1" id="dt" className="btn btn-primary">View Question</a>
            <a href="https://eduhub-ide.netlify.app/" id="dt" className="btn btn-primary">EduHub Ide</a>
          </div>
        </li>
        <li data-aos="fade-up" data-aos-delay="300">
          <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list1-7" class="collapsed">Super Reduced String<i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
          <div id="faq-list1-7" class="collapse" data-bs-parent=".faq-list1">
            <p>
            Reduce a string of lowercase characters in range ascii[‘a’..’z’]by doing a series of operations. In each operation, select a pair of adjacent letters that match, and delete them.

Delete as many characters as possible using this method and return the resulting string. If the final string is empty, return Empty String

 
            </p>
            <br/><br/>
            <a href="https://www.hackerrank.com/challenges/reduced-string/problem" id="dt" className="btn btn-primary">View Question</a>
            <a href="https://eduhub-ide.netlify.app/" id="dt" className="btn btn-primary">EduHub Ide</a>
          </div>
        </li>
        <li data-aos="fade-up" data-aos-delay="300">
          <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list1-8" class="collapsed">CamelCase<i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
          <div id="faq-list1-8" class="collapse" data-bs-parent=".faq-list1">
            <p>
            There is a sequence of words in CamelCase as a string of letters, , having the following properties:

It is a concatenation of one or more words consisting of English letters.
All letters in the first word are lowercase.
For each of the subsequent words, the first letter is uppercase and rest of the letters are lowercase.
Given , determine the number of words in .

 
            </p>
            <br/><br/>
            <a href="https://www.hackerrank.com/challenges/camelcase/problem" id="dt" className="btn btn-primary">View Question</a>
            <a href="https://eduhub-ide.netlify.app/" id="dt" className="btn btn-primary">EduHub Ide</a>
          </div>
        </li>
        <li data-aos="fade-up" data-aos-delay="300">
          <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list1-9" class="collapsed">Factors Finding  <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
          <div id="faq-list1-9" class="collapse" data-bs-parent=".faq-list1">
            <p>
            You are given a number N and find all the distinct factors of N.

Input:
First-line will contain the number N.
Output:
In the first line print number of distinct factors of N.
In the second line print all distinct factors in ascending order separated by space.

 
            </p>
            <br/><br/>
            <a href="https://www.codechef.com/CCSTART2/problems/DIFACTRS" id="dt" className="btn btn-primary">View Question</a>
            <a href="https://eduhub-ide.netlify.app/" id="dt" className="btn btn-primary">EduHub Ide</a>
          </div>
        </li>
        <li data-aos="fade-up" data-aos-delay="300">
          <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list1-10" class="collapsed">Is Both Or Not  <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
          <div id="faq-list1-10" class="collapse" data-bs-parent=".faq-list1">
            <p>
            You're given a number N. If N is divisible by 5 or 11 but not both then print "ONE"(without quotes). If N is divisible by both 5 and 11 then print "BOTH"(without quotes). If N is not divisible by 5 or 11 then print "NONE"(without quotes)..

 
            </p>
            <br/><br/>
            <a href="https://www.codechef.com/CCSTART2/problems/ISBOTH" id="dt" className="btn btn-primary">View Question</a>
            <a href="https://eduhub-ide.netlify.app/" id="dt" className="btn btn-primary">EduHub Ide</a>
          </div>
        </li>
        <li data-aos="fade-up" data-aos-delay="300">
          <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list1-11" class="collapsed">Valid Triangle Or Not<i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
          <div id="faq-list1-11" class="collapse" data-bs-parent=".faq-list1">
            <p>
            You're given the length of three sides a, b, and c respectively. Now check if these three sides can form a triangle or not. Print "YES"(without quotes) if it can form a valid triangle with an area greater than 0, otherwise print "NO" (without quotes).
 
            </p>
            <br/><br/>
            <a href="https://www.codechef.com/CCSTART2/problems/TRIVALCH" id="dt" className="btn btn-primary">View Question</a>
            <a href="https://eduhub-ide.netlify.app/" id="dt" className="btn btn-primary">EduHub Ide</a>
          </div>
        </li>
        <li data-aos="fade-up" data-aos-delay="300">
          <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list1-12" class="collapsed">Seven-Segment Display <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
          <div id="faq-list1-12" class="collapse" data-bs-parent=".faq-list1">
            <p>
            Alice got a number written in seven segment format where each segment was creatted used a matchstick.

Example: If Alice gets a number 123 so basically Alice used 12 matchsticks for this number.

Alice is wondering what is the numerically largest value that she can generate by using at most the matchsticks that she currently possess.Help Alice out by telling her that number.

 

 
            </p>
            <br/><br/>
            <a href="https://www.hackerearth.com/practice/basic-programming/input-output/basics-of-input-output/practice-problems/algorithm/seven-segment-display-nov-easy-e7f87ce0/" id="dt" className="btn btn-primary">View Question</a>
            <a href="https://eduhub-ide.netlify.app/" id="dt" className="btn btn-primary">EduHub Ide</a>
          </div>
        
        </li>

      </ul>
    </div>

  </div>
  <br/>
  <br/>
  <a href="" id="dt1" className="btn btn-primary">View All Questions</a>
  <a href="https://eduhub-ide.netlify.app/" id="dt1" className="btn btn-primary">EduHub Ide</a>
  <br/>
  <br/>
  <br/>
  <br/>
  <Contact/>
</section>
    </div>
    )
}
