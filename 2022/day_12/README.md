Original source: [https://adventofcode.com/2022/day/12](https://adventofcode.com/2022/day/12)

## --- Day 12: Hill Climbing Algorithm ---

You try contacting the Elves using your <span title="When you look up the specs for your handheld device, every field just says &quot;plot&quot;.">handheld device</span>, but the river you're following must be too low to get a decent signal.

You ask the device for a heightmap of the surrounding area (your puzzle input). The heightmap shows the local area from above broken into a grid; the elevation of each square of the grid is given by a single lowercase letter, where <code>a</code> is the lowest elevation, <code>b</code> is the next-lowest, and so on up to the highest elevation, <code>z</code>.

Also included on the heightmap are marks for your current position (<code>S</code>) and the location that should get the best signal (<code>E</code>). Your current position (<code>S</code>) has elevation <code>a</code>, and the location that should get the best signal (<code>E</code>) has elevation <code>z</code>.

You'd like to reach <code>E</code>, but to save energy, you should do it in <em><strong>as few steps as possible</</strong>em>. During each step, you can move exactly one square up, down, left, or right. To avoid needing to get out your climbing gear, the elevation of the destination square can be <em><strong>at most one higher</strong></em> than the elevation of your current square; that is, if your current elevation is <code>m</code>, you could step to elevation <code>n</code>, but not to elevation <code>o</code>. (This also means that the elevation of the destination square can be much lower than the elevation of your current square.)

For example:

<pre>
<code><em><strong>S</strong></em>abqponm
abcryxxl
accsz<em><strong>E</strong></em>xk
acctuvwj
abdefghi</code>
</pre>
Here, you start in the top-left corner; your goal is near the middle. You could start by moving down or right, but eventually you'll need to head toward the <code>e</code> at the bottom. From there, you can spiral around to the goal:

<pre>
<code>v..v&lt;&lt;&lt;&lt;
&gt;v.vv&lt;&lt;^
.&gt;vv&gt;E^^
..v&gt;&gt;&gt;^^
..&gt;&gt;&gt;&gt;&gt;^</code>
</pre>
In the above diagram, the symbols indicate whether the path exits each square moving up (<code>^</code>), down (<code>v</code>), left (<code>&lt;</code>), or right (<code>&gt;</code>). The location that should get the best signal is still <code>E</code>, and <code>.</code> marks unvisited squares.

This path reaches the goal in <code><em><strong>31</</strong>em></code> steps, the fewest possible.

<em><strong>What is the fewest steps required to move from your current position to the location that should get the best signal?</strong></em>
</br>
</br>

## --- Part Two ---

As you walk up the hill, you suspect that the Elves will want to turn this into a hiking trail. The beginning isn't very scenic, though; perhaps you can find a better starting point.

To maximize exercise while hiking, the trail should start as low as possible: elevation <code>a</code>. The goal is still the square marked <code>E</code>. However, the trail should still be direct, taking the fewest steps to reach its goal. So, you'll need to find the shortest path from <em><strong>any square at elevation <code>a</code></strong></em> to the square marked <code>E</code>.

Again consider the example from above:

<pre>
<code><em><strong>S</strong></em>abqponm
abcryxxl
accsz<em><strong>E</strong></em>xk
acctuvwj
abdefghi</code>
</pre>
Now, there are six choices for starting position (five marked <code>a</code>, plus the square marked <code>S</code> that counts as being at elevation <code>a</code>). If you start at the bottom-left square, you can reach the goal most quickly:

<pre>
<code>...v&lt;&lt;&lt;&lt;
...vv&lt;&lt;^
...v&gt;E^^
.&gt;v&gt;&gt;&gt;^^
&gt;^&gt;&gt;&gt;&gt;&gt;^</code>
</pre>
This path reaches the goal in only <code><em><strong>29</</strong>em></code> steps, the fewest possible.

<em><strong>What is the fewest steps required to move starting from any square with elevation <code>a</code> to the location that should get the best signal?</strong></em>
