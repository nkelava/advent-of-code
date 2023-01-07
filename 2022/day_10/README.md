Original source: [https://adventofcode.com/2022/day/10](https://adventofcode.com/2022/day/10)

## --- Day 10: Cathode-Ray Tube ---

You avoid the ropes, plunge into the river, and swim to shore.

The Elves yell something about meeting back up with them upriver, but the river is too loud to tell exactly what they're saying. They finish crossing the bridge and disappear from view.

Situations like this must be why the Elves prioritized getting the communication system on your handheld device working. You pull it out of your pack, but the amount of water slowly draining from a big crack in its screen tells you it probably won't be of much immediate use.

<em><strong>Unless</strong></em>, that is, you can design a replacement for the device's video system! It seems to be some kind of [cathode-ray tube](https://en.wikipedia.org/wiki/Cathode-ray_tube) screen and simple CPU that are both driven by a precise <em><strong>clock circuit</strong></em>. The clock circuit ticks at a constant rate; each tick is called a <em><strong>cycle</strong></em>.

Start by figuring out the signal being sent by the CPU. The CPU has a single register, <code>X</code>, which starts with the value <code>1</code>. It supports only two instructions:

<ul>
    <li>
        <code>addx V</code> takes <em><strong>two cycles</strong></em> to complete. <em><strong>After</strong></em> two cycles, the <code>X</code> register is increased by the value <code>V</code>. (<code>V</code> can be negative.)
    </li>
    <li>
        <code>noop</code> takes <em><strong>one cycle</strong></em> to complete. It has no other effect.
    </li>
</ul>

The CPU uses these instructions in a program (your puzzle input) to, somehow, tell the screen what to draw.

Consider the following small program:

<pre>
<code>noop
addx 3
addx -5</code>
</pre>

Execution of this program proceeds as follows:

<ul>
    <li>
        At the start of the first cycle, the <code>noop</code> instruction begins execution. During the first cycle, <code>X</code> is <code>1</code>. After the first cycle, the <code>noop</code> instruction finishes execution, doing nothing.
    </li>
    <li>
        At the start of the second cycle, the <code>addx 3</code> instruction begins execution. During the second cycle, <code>X</code> is still <code>1</code>.
    </li>
    <li>
        During the third cycle, <code>X</code> is still <code>1</code>. After the third cycle, the <code>addx 3</code> instruction finishes execution, setting <code>X</code> to <code>4</code>.
    </li>
    <li>
        At the start of the fourth cycle, the <code>addx -5</code> instruction begins execution. During the fourth cycle, <code>X</code> is still <code>4</code>.
    </li>
    <li>
        During the fifth cycle, <code>X</code> is still <code>4</code>. After the fifth cycle, the <code>addx -5</code> instruction finishes execution, setting <code>X</code> to <code>-1</code>.
    </li>
</ul>

Maybe you can learn something by looking at the value of the <code>X</code> register throughout execution. For now, consider the <em><strong>signal strength</strong></em> (the cycle number multiplied by the value of the <code>X</code> register) <em><strong>during</strong></em> the 20th cycle and every 40 cycles after that (that is, during the 20th, 60th, 100th, 140th, 180th, and 220th cycles).

For example, consider this larger program:

<pre>
<code>addx 15
addx -11
addx 6
addx -3
addx 5
addx -1
addx -8
addx 13
addx 4
noop
addx -1
addx 5
addx -1
addx 5
addx -1
addx 5
addx -1
addx 5
addx -1
addx -35
addx 1
addx 24
addx -19
addx 1
addx 16
addx -11
noop
noop
addx 21
addx -15
noop
noop
addx -3
addx 9
addx 1
addx -3
addx 8
addx 1
addx 5
noop
noop
noop
noop
noop
addx -36
noop
addx 1
addx 7
noop
noop
noop
addx 2
addx 6
noop
noop
noop
noop
noop
addx 1
noop
noop
addx 7
addx 1
noop
addx -13
addx 13
addx 7
noop
addx 1
addx -33
noop
noop
noop
addx 2
noop
noop
noop
addx 8
noop
addx -1
addx 2
addx 1
noop
addx 17
addx -9
addx 1
addx 1
addx -3
addx 11
noop
noop
addx 1
noop
addx 1
noop
noop
addx -13
addx -19
addx 1
addx 3
addx 26
addx -30
addx 12
addx -1
addx 3
addx 1
noop
noop
noop
addx -9
addx 18
addx 1
addx 2
noop
noop
addx 9
noop
noop
noop
addx -1
addx 2
addx -37
addx 1
addx 3
noop
addx 15
addx -21
addx 22
addx -6
addx 1
noop
addx 2
addx 1
noop
addx -10
noop
noop
addx 20
addx 1
addx 2
addx 2
addx -6
addx -11
noop
noop
noop</code>
</pre>

The interesting signal strengths can be determined as follows:

<ul>
    <li>
        During the 20th cycle, register <code>X</code> has the value <code>21</code>, so the signal strength is 20 * 21 = <em><strong>420</strong></em>. (The 20th cycle occurs in the middle of the second <code>addx -1</code>, so the value of register <code>X</code> is the starting value, <code>1</code>, plus all of the other <code>addx</code> values up to that point: 1 + 15 - 11 + 6 - 3 + 5 - 1 - 8 + 13 + 4 = 21.)
    </li>
    <li>
        During the 60th cycle, register <code>X</code> has the value <code>19</code>, so the signal strength is 60 * 19 = <code><em><strong>1140</strong></em></code>
    </li>
    <li>
        During the 100th cycle, register <code>X</code> has the value <code>18</code>, so the signal strength is 100 * 18 = <code><em><strong>1800</strong></em></code>.
    </li>
    <li>
        During the 140th cycle, register <code>X</code> has the value <code>21</code>, so the signal strength is 140 * 21 = <code><em><strong>2940</strong></em></code>.
    </li>
    <li>
        During the 180th cycle, register <code>X</code> has the value <code>16</code>, so the signal strength is 180 * 16 = <code><em><strong>2880</strong></em></code>.
    </li>
    <li>
        During the 220th cycle, register <code>X</code> has the value <code>18</code>, so the signal strength is 220 * 18 = <code><em><strong>3960</strong></em></code>.
    </li>
</ul>

The sum of these signal strengths is <code><em><strong>13140</strong></em></code>.

Find the signal strength during the 20th, 60th, 100th, 140th, 180th, and 220th cycles. <em><strong>What is the sum of these six signal strengths?</strong></em>
