<script lang='ts'>
    import * as A from 'index.ts'
    import {goto} from '@sapper/app'
    import {createBrowserHistory} from 'history';

    const history = createBrowserHistory();
    import {t} from './_tab.ts'

    const title = t.title;
    const onClickHandle = (e) => {
        goto(e.target.href, {replaceState: true})
    };
    const data = [
        {href: A.pPath() + '/general', name: 'General'},
        {href: A.pPath() + '/membership', name: 'Membership'},
    ];

    let i = t.tabIndex;

    A;
</script>
<h1>{$title}</h1>

<div class="tabs tabs-wrapper top tabs-expand">
    <ul class="tabs-list">
        {#each data as d, index}
            <li class={$i == index ? "active" : ''}>
                <a href={d.href} on:click|preventDefault='{onClickHandle}'>{d.name}</a>
            </li>
        {/each}
    </ul>
</div>

<slot></slot>
