Original source: [https://adventofcode.com/2022/day/8](https://adventofcode.com/2022/day/8)

## --- Day 8: Treetop Tree House ---

The expedition comes across a peculiar patch of tall trees all planted carefully in a grid. The Elves explain that a previous expedition planted these trees as a reforestation effort. Now, they're curious if this would be a good location for a [tree house](https://en.wikipedia.org/wiki/Tree_house).

First, determine whether there is enough tree cover here to keep a tree house <em><strong><strong>hidden</strong></strong></em>. To do this, you need to count the number of trees that are <em><strong><strong>visible from outside the grid</strong></strong></em> when looking directly along a row or column.

The Elves have already launched a [quadcopter](https://en.wikipedia.org/wiki/Quadcopter) to generate a map with the height of each tree (<span title="The Elves have already launched a quadcopter (your puzzle input).">your puzzle input</span>). For example:

<pre>
<code>30373
25512
65332
33549
35390</code>
</pre>

Each tree is represented as a single digit whose value is its height, where <code>0</code> is the shortest and <code>9</code> is the tallest.

A tree is <em><strong><strong>visible</strong></strong></em> if all of the other trees between it and an edge of the grid are <em><strong><strong>shorter</strong></strong></em> than it. Only consider trees in the same row or column; that is, only look up, down, left, or right from any given tree.

All of the trees around the edge of the grid are <em><strong><strong>visible</strong></strong></em> - since they are already on the edge, there are no trees to block the view. In this example, that only leaves the <em><strong><strong>interior nine trees</strong></strong></em> to consider:

<ul>
    <li>
        The top-left <code>5</code> is <em><strong><strong>visible</strong></strong></em> from the left and top. (It isn't visible from the right or bottom since other trees of height <code>5</code> are in the way.)
    </li>
    <li>
        The top-middle <code>5</code> is <em><strong><strong>visible</strong></strong></em> from the top and right.
    </li>
    <li>
        The top-right <code>1</code> is not visible from any direction; for it to be visible, there would need to only be trees of height <em><strong><strong>0</strong></strong></em> between it and an edge.
    </li>
    <li>
        The left-middle <code>5</code> is <em><strong><strong>visible</strong></strong></em>, but only from the right.
    </li>
    <li>
        The center <code>3</code> is not visible from any direction; for it to be visible, there would need to be only trees of at most height <code>2</code> between it and an edge.
    </li>
    <li>
        The right-middle <code>3</code> is <em><strong><strong>visible</strong></strong></em> from the right.
    </li>
    <li>
        In the bottom row, the middle <code>5</code> is <em><strong><strong>visible</strong></strong></em>, but the <code>3</code> and <code>4</code> are not.
    </li>
</ul>

With 16 trees visible on the edge and another 5 visible in the interior, a total of <code><em><strong><strong>21</strong></strong></em></code> trees are visible in this arrangement.

Consider your map; <em><strong><strong>how many trees are visible from outside the grid?</strong></strong></em>
</br>
</br>

## --- Part Two ---

Content with the amount of tree cover available, the Elves just need to know the best spot to build their tree house: they would like to be able to see a lot of <em><strong>trees</strong></em>.

To measure the viewing distance from a given tree, look up, down, left, and right from that tree; stop if you reach an edge or at the first tree that is the same height or taller than the tree under consideration. (If a tree is right on the edge, at least one of its viewing distances will be zero.)

The Elves don't care about distant trees taller than those found by the rules above; the proposed tree house has large [eaves](https://en.wikipedia.org/wiki/Eaves) to keep it dry, so they wouldn't be able to see higher than the tree house anyway.

In the example above, consider the middle <code>5</code> in the second row:

<pre>
<code>30373
25<em><strong>5</strong></em>12
65332
33549
35390</code>
</pre>

<ul>
    <li>
        Looking up, its view is not blocked; it can see <code><em><strong>1</strong></em></code> tree (of height <code>3</code>).
    </li>
    <li>
        Looking left, its view is blocked immediately; it can see only <code><em><strong>1</strong></em></code> tree (of height <code>5</code>, right next to it).
    </li>
    <li>
        Looking right, its view is not blocked; it can see <code><em><strong>2</strong></em></code> trees.
    </li>
    <li>
        Looking down, its view is blocked eventually; it can see <code><em><strong>2</strong></em></code> trees (one of height <code>3</code>, then the tree of height <code>5</code> that blocks its view).
    </li>
</ul>

A tree's <em><strong>scenic score</strong></em> is found by <em><strong>multiplying together</strong></em> its viewing distance in each of the four directions. For this tree, this is <code><em><strong>4</strong></em></code> (found by multiplying <code>1 * 1 * 2 * 2</code>).

However, you can do even better: consider the tree of height <code>5</code> in the middle of the fourth row:

<pre>
<code>30373
25512
65332
33<em><strong>5</strong></em>49
35390</code>
</pre>

<ul>
    <li>
        Looking up, its view is blocked at <code><em><strong>2</strong></em></code> trees (by another tree with a height of <code>5</code>).
    </li>
    <li>
        Looking left, its view is not blocked; it can see <code><em><strong>2</strong></em></code> trees.
    </li>
    <li>
        Looking down, its view is also not blocked; it can see <code><em><strong>1</strong></em></code> tree.
    </li>
    <li>
        Looking right, its view is blocked at <code><em><strong>2</strong></em></code> trees (by a massive tree of height <code>9</code>).
    </li>
</ul>

This tree's scenic score is <code><em><strong>8</strong></em></code> (<code>2 * 2 * 1 * 2</code>); this is the ideal spot for the tree house.

Consider each tree on your map. <em><strong>What is the highest scenic score possible for any tree?</strong></em>
