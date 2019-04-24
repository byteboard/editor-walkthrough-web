# Byteboard Environment Walk-Through

## Let's walk-through Byteboard's IDE

**This Side Panel** will contain your instructions and task list. If you accidentally close it, return to your Interview Details Document to get the command to reopen it.

&nbsp;

**The Terminal** can be minimized by clicking the <walkthrough-cloud-shell-icon></walkthrough-cloud-shell-icon> icon above this panel.
* You can copy commands listed in the instructions to the terminal by clicking the <walkthrough-cloud-shell-icon></walkthrough-cloud-shell-icon> in code boxes like the one below. Try running the command below:
```bash
sh ~/editor-walkthrough/timer.sh &
```
* A timer will show at the bottom right of the terminal once you start your interview. You should see an example timer running now.

&nbsp;

**The Editor** will auto-save any changes you make. To familiarize yourself with the editor's features perform the following 8 tasks: 
1. If it is closed, open the editor by pushing the <walkthrough-cloud-shell-editor-icon></walkthrough-cloud-shell-editor-icon> icon above this panel.
2. Open the runner.py file in the editor-walkthrough folder. 
3. Hover over ``` MathStuff() ``` in the runner.py file. You should see the definition of the MathStuff Class appear. Hovering over functions, classes, and libraries allows you to view relevant documentation. 
4. Now right click on ``` MathStuff() ``` and select "Find all references." You should now be able to see all of the occurances of MathStuff throughout your file system. 
5. In the references view, click on the mathStuff.py dropdown and click on "class MathStuff". In the code view you should now see a snippet of the code where the MathStuff class is defined. In this view you can edit the snippet directly. 
    Try adding something to the current ``` MathStuff() ``` documentation.
6. Close the references view and right click on ```square```. Push "Go to definition." You should now be in the mathStuff.py file. There is also an option in the right-click menu for "Peek Definition" if you dont want to jump to the definition itself.
7. Now go to the menu at the top of the editor and push View > Outline. You should now see a full outline of the mathStuff.py file for easy navigation. 
8. Take a moment to explore a little more. There are several features that we weren't able to walk-through but you may find interesting.  

&nbsp;

*Other Tips:*
* If you are unfamiliar with the command line [here are some key Linux commands](http://www.informit.com/blogs/blog.aspx?uk=The-10-Most-Important-Linux-Commands).
* If you would like to change the editor's color theme go to File > Settings > Change Color Theme. 
