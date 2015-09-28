<section class="ccontent">
	<form action="./control/signupControl.php" method="post" onsubmit="return check()">
		<section class="yform">
			<section class="text1">Username:</section>
			<section class="text2"> <input type="text" name="login" id="username" size="30" onblur="checkuser()" class="textfield" placeholder="3-15 numerals,letters,underline" required pattern="[a-zA-Z0-9_]{3,15}" title="user name should be 3 to 15 characters which consists of alphabet letters, numerals and/or underlines" /></section>
			<section class="check" id="checkusername"></section>
		</section>
		<section class="yform">
			<section class="text1">Email:</section>
			<section class="text2"> <input type="email" name="email" id="email" size="30" onblur="checkemail()" class="textfield" placeholder="example@xx.xxx" required pattern="[a-zA-Z0-9_.-]{3,}@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+" required title="please enter your email" /></section>
			<section class="check" id="checkemail"></section>
		</section>
		<section class="yform">
			<section class="text1">Password: </section>
			<section class="text2"><input type="password" name="pwd" id="pwd"  size="30" onblur="checkpwd()" class="textfield" placeholder="6-20 numerals,letters" required pattern="[a-zA-Z0-9]{6,20}" title="password should be 6 to 20 characters which consists of alphabet letters and/or numerals" /></section>
		</section>
		<section class="yform">
			<section class="text1">Confirm Password: </section>
			<section class="text2"><input type="password" name="pwdcfm" id="pwdcfm" size="30" onblur="checkpwd()" class="textfield" placeholder="Retype your passward" required /></section>
			<section class="check" id="cfmpwd"></section>
		</section>
		<section class="yform">
			<section class="text1">Security questions: </section>
			<section class="text2"><select name="questionId" class="textfield" id="question">
  				<option value="1">What is the first name of your favorate teacher in high school?</option>
  				<option value="2">Who is your best childhood friend?</option>
  				<option value="3">What was the name of your elementary/primary school?</option>
  				<option value="4">In what city or town did you meet your spouse/partner?</option>
  				<option value="5">What is the last name of the teacher who gave you your first failing grade?</option>
  				<option value="6">What is the first name of the person you first kissed?</option>
  				<option value="7">What was your favorite place to visit as a child?</option>
			</select></section>
		</section>
		<section class="yform">
			<section class="text1">Answer:</section>
			<section class="text2"> <input type="text" size="30" name="ans" class="textfield" placeholder="1-100 numerals,letters"  required pattern="[a-zA-Z0-9]{1,100}" title="the answer should be 1 to 100 characters which consists of alphabet letters and/or numerals" /></section>
		</section>
		<section class="yform">
			<section>
				<input type="submit" value="Submit" class="sub" />
			</section>
		</section>
	</form>
</section>