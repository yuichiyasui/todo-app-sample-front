export default function SignUp() {
  return (
    <main>
      <h1>ユーザー登録</h1>
      <form>
        <div>
          <label htmlFor="">
            <span>メールアドレス</span>
            <input
              type="email"
              placeholder="メールアドレスを入力してください"
            />
          </label>
        </div>
        <button type="submit">メールを送信する</button>
      </form>
    </main>
  );
}
