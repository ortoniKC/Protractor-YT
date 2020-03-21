package whyNotSelenium;

import java.util.concurrent.TimeUnit;
import java.util.regex.Pattern;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class WhyNotSelenium {

	public static void main(String[] args) throws InterruptedException {
	
		ChromeDriver driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
		driver.get("https://juliemr.github.io/protractor-demo/");
		driver.findElement(By.xpath("//input[@ng-model='first']")).sendKeys("1");
		driver.findElement(By.xpath("//input[@ng-model='second']")).sendKeys("2");
		driver.findElement(By.id("gobutton")).click();
//		Thread.sleep(5000);
		WebElement result = driver.findElement(By.tagName("h2"));
		WebDriverWait wait = new WebDriverWait(driver, 20);
//		wait.until(ExpectedConditions.visibilityOf(result));
		Pattern pattern = Pattern.compile("\\d+");
		wait.until(ExpectedConditions.textMatches(By.tagName("h2"), pattern));		
		System.out.println("The result is : "+result.getText());
		
		
		
		
	}

}
