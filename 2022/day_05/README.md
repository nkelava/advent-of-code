Original source: [https://adventofcode.com/2022/day/5](https://adventofcode.com/2022/day/5)

## --- Day 5: Supply Stacks ---

The expedition can depart as soon as the final supplies have been unloaded from the ships. Supplies are stored in stacks of marked <em><strong>crates</strong></em>, but because the needed supplies are buried under many other crates, the crates need to be rearranged.

The ship has a <em><strong>giant cargo crane</strong></em> capable of moving crates between stacks. To ensure none of the crates get crushed or fall over, the crane operator will rearrange them in a series of carefully-planned steps. After the crates are rearranged, the desired crates will be at the top of each stack.

The Elves don't want to interrupt the crane operator during this delicate procedure, but they forgot to ask her <em><strong>which</strong></em> crate will end up where, and they want to be ready to unload them as soon as possible so they can embark.

They do, however, have a drawing of the starting stacks of crates <em><strong>and</strong></em> the rearrangement procedure (your puzzle input). For example:

<pre>
<code>    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2</code>
</pre>

In this example, there are three stacks of crates. Stack 1 contains two crates: crate <code>Z</code> is on the bottom, and crate <code>N</code> is on top. Stack 2 contains three crates; from bottom to top, they are crates <code>M</code>, <code>C</code>, and <code>D</code>. Finally, stack 3 contains a single crate, <code>P</code>.

Then, the rearrangement procedure is given. In each step of the procedure, a quantity of crates is moved from one stack to a different stack. In the first step of the above rearrangement procedure, one crate is moved from stack 2 to stack 1, resulting in this configuration:

<pre>
<code>[D]        
[N] [C]    
[Z] [M] [P]
 1   2   3 </code>
</pre>

In the second step, three crates are moved from stack 1 to stack 3. Crates are moved <em>one at a time</em>, so the first crate to be moved (<code>D</code>) ends up below the second and third crates:</p>

<pre>
<code>        [Z]
        [N]
    [C] [D]
    [M] [P]
 1   2   3</code>
</pre>

Then, both crates are moved from stack 2 to stack 1. Again, because crates are moved <em><strong>one at a time</strong></em>, crate <code>C</code> ends up below crate <code>M</code>:

<pre>
<code>        [Z]
        [N]
[M]     [D]
[C]     [P]
 1   2   3</code>
</pre>

Finally, one crate is moved from stack 1 to stack 2:

<pre>
<code>        [<em>Z</em>]
        [N]
        [D]
[<em>C</em>] [<em>M</em>] [P]
 1   2   3</code>
</pre>

The Elves just need to know <em><strong>which crate will end up on top of each stack</strong></em>; in this example, the top crates are <code>C</code> in stack 1, <code>M</code> in stack 2, and <code>Z</code> in stack 3, so you should combine these together and give the Elves the message <code><em>CMZ</em></code>.

<em><strong>After the rearrangement procedure completes, what crate ends up on top of each stack?</strong></em>
</br>
</br>

## --- Part Two ---

As you finish identifying the misplaced items, the Elves come to you with another issue.

For safety, the Elves are divided into groups of three. Every Elf carries a badge that identifies their group. For efficiency, within each group of three Elves, the badge is the <em><strong>only item type carried by all three Elves</strong></em>. That is, if a group's badge is item type <code>B</code>, then all three Elves will have item type <code>B</code> somewhere in their rucksack, and at most two of the Elves will be carrying any other item type.

The problem is that someone forgot to put this year's updated authenticity sticker on the badges. All of the badges need to be pulled out of the rucksacks so the new authenticity stickers can be attached.

Additionally, nobody wrote down which item type corresponds to each group's badges. The only way to tell which item type is the right one is by finding the one item type that is <em><strong>common between all three Elves</strong></em> in each group.

Every set of three lines in your list corresponds to a single group, but each group can have a different badge item type. So, in the above example, the first group's rucksacks are the first three lines:
<pre>
<code>vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg</code>
</pre>

And the second group's rucksacks are the next three lines:
<pre>
<code>wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw</code>
</pre>

In the first group, the only item type that appears in all three rucksacks is lowercase <code>r</code>; this must be their badges. In the second group, their badge item type must be <code>Z</code>.

Priorities for these items must still be found to organize the sticker attachment efforts: here, they are 18 (<code>r</code>) for the first group and 52 (<code>Z</code>) for the second group. The sum of these is <code><em><strong>70</strong></em></code>.
Find the item type that corresponds to the badges of each three-Elf group.

<em><strong>What is the sum of the priorities of those item types?</strong></em>
